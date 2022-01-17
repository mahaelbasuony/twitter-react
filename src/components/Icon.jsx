import React from "react";
import Icons from "./icons.svg";
import PropTypes from "prop-types";

const Icon = ({ name, color, size }) => (
  <svg
    className={`icon icon-${name}`}
    fill={color}
    width={`${size}px`}
    height={`${size}px`}
  >
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Icon;
