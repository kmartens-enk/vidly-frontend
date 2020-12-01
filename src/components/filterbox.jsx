import PropTypes from "prop-types";
import React from "react";

const FilterBox = (props) => {
  const { currentItem, items, onClick, textProperty, valueProperty } = props;
  const activeClass = "list-group-item active";
  const normalClass = "list-group-item";
  return (
    <ul className="list-group">
      <li
        key={0}
        className={!currentItem ? activeClass : normalClass}
        onClick={() => onClick()}
      >
        All items
      </li>
      {items.map((item, idx) => (
        <li
          key={item[valueProperty]}
          className={
            idx === items.indexOf(currentItem) ? activeClass : normalClass
          }
          onClick={() => onClick(item)}
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
  currentItem: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  textProperty: PropTypes.string,
  valueProperty: PropTypes.string,
};

export default FilterBox;
