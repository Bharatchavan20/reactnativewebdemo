import React, { Fragment, useContext } from "react";
import { Context } from "../Context";

const Footer = () => {
  const { activeStation } = useContext(Context);

  return (
    <div className="footer">
      {activeStation && (
        <Fragment>
          <p className="footer-title">currently playing</p>
          <p className="footer-station">{activeStation}</p>
        </Fragment>
      )}
      {!activeStation && (
        <Fragment>
          <p className="footer-title">Pick your station</p>
        </Fragment>
      )}
    </div>
  );
};

export default Footer;
