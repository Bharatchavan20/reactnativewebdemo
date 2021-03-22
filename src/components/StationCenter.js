import React from "react";
import PropTypes from "prop-types";

const StationCenter = ({ logo }) => {
  return (
    <div className="controls">
      <i className="fal fa-minus-circle controls-prev" />
      <img className="station-logo animated infinite rotate-full" src={logo} alt="station logo" />
      <i className="fal fa-plus-circle controls-next" />
    </div>
  )
};
export default StationCenter;

StationCenter.propTypes = {
  logo: PropTypes.string.isRequired
};
