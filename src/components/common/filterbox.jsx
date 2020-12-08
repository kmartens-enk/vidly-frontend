import PropTypes from "prop-types";
import React from "react";

const FilterBox = ({
  selectedItem,
  items,
  onItemSelect,
  textProperty,
  valueProperty,
}) => {
  const activeClass = "list-group-item active";
  const normalClass = "list-group-item";
  return (
    <ul className="list-group">
      {items.map((item, idx) => (
        <li
          key={item[valueProperty]}
          className={item === selectedItem ? activeClass : normalClass}
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

FilterBox.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

FilterBox.propTypes = {
  items: PropTypes.array.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  textProperty: PropTypes.string,
  valueProperty: PropTypes.string,
};

export default FilterBox;
