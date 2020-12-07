import React, { Component } from "react";

import PropTypes from "prop-types";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  render() {
    const { data, columns, idPath } = this.props;

    return (
      <tbody>
        {data.map((row) => (
          <tr key={row[idPath]}>
            {columns.map((col) => (
              <td key={col.path || col.key}> {this.renderCell(row, col)} </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

TableBody.defaultProps = {
  idPath: "_id",
};

TableBody.propTypes = {
  idPath: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
};

export default TableBody;
