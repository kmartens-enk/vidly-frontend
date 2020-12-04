import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./pagination";
import paginate from "../utils/paginate";
import FilterBox from "./filterbox";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    page: 1,
    pageSize: 4,
    selectedGenre: undefined,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLiked = (movie) => {
    const movies = [...this.state.movies];
    const idx = movies.indexOf(movie);
    movies[idx] = { ...movie };
    movies[idx].liked = !movie.liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, page: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const {
      page,
      pageSize,
      movies: allMovies,
      genres,
      selectedGenre,
      sortColumn,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const count = filtered.length;

    if (count === 0) return <p>No movies in the database</p>;

    const movies = paginate(sorted, page, pageSize);

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-">
            <FilterBox
              selectedItem={selectedGenre}
              items={genres}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <p>Showing {count} movies in the database</p>
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onDelete={this.handleDelete}
              onLike={this.handleLiked}
              onSort={this.handleSort}
            />
            <Pagination
              itemCount={count}
              pageSize={pageSize}
              currentPage={page}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
