import React, { Component } from "react";
import LikeIcon from "./likeIcon";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title"},
    { path: "genre.name", label: "Genre"},
    { path: "numberInStock", label: "Stock"},
    { path: "dailyRentalRate", label: "Rate"},
    { key: "like"}, //for buttons
    { key: "delete"},
  ];

  render() {
    const { movies, onDelete, onLike, SortColumn, onSort } = this.props;
    

    return (
      <table className="table">
        <TableHeader columns={this.colums} sortColumn={SortColumn} onSort={onSort}
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td> {movie.title}</td>
              <td> {movie.genre.name} </td>
              <td> {movie.numberInStock} </td>
              <td> {movie.dailyRentalRate} </td>
              <td>
                <LikeIcon liked={movie.liked} onClick={() => onLike(movie)} />
              </td>
              <td>
                {" "}
                <button
                  className="btn btn-danger sm"
                  onClick={() => onDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
