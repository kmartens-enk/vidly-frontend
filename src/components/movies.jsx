import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import LikeIcon from "./likeIcon";
import Pagination from "./pagination";
import paginate from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    page: 1,
    pageSize: 4,
  };

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

  getPageMovies(page) {
    const movies = [];
    const startidx = (page - 1) * this.state.pageSize;
    for (let i = 0; i < this.state.pageSize; i++) {
      if (startidx + i < this.state.movies.length) {
        movies.push(this.state.movies[startidx + i]);
      }
    }
    console.log("movies on page", movies);
    return movies;
  }

  render() {
    const { length: count } = this.state.movies;
    const { page, pageSize, movies: allMovies } = this.state;

    if (count === 0) return <p>No movies in the database</p>;

    const movies = paginate(allMovies, page, pageSize);

    return (
      <React.Fragment>
        <p>Showing {count} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td> {movie.title}</td>
                <td> {movie.genre.name} </td>
                <td> {movie.numberInStock} </td>
                <td> {movie.dailyRentalRate} </td>
                <td>
                  <LikeIcon
                    liked={movie.liked}
                    onClick={() => this.handleLiked(movie)}
                  />
                </td>
                <td>
                  {" "}
                  <button
                    className="btn btn-danger sm"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemCount={count}
          pageSize={pageSize}
          currentPage={page}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
