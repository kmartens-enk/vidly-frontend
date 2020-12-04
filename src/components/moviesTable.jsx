import React, { Component } from "react";
import LikeIcon from "./likeIcon";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (item) => (
        <LikeIcon liked={item.liked} onClick={() => this.props.onLike(item)} />
      ),
    },
    {
      key: "delete",
      content: (item) => (
        <button
          className="btn btn-danger sm"
          onClick={() => this.props.onDelete(item)}
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onDelete, onLike, sortColumn, onSort } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={movies} columns={this.columns} />
      </table>
    );
  }
}

export default MoviesTable;
