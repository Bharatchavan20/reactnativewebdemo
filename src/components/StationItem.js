import React, { useContext } from "react";
import { Context } from "../Context";
import "../scss/style.scss";
import PropTypes from "prop-types";

const StationItem = ({ name, frequency, children }) => {
	const { activeStation, toggleControls } = useContext(Context);

	const classNames =
		activeStation === name ? "stations-item active" : "stations-item";

	return (
		<div className={classNames}>
			<div
				className="stations-item-header"
				onClick={() => toggleControls(name)}
				onKeyDown={() => toggleControls(name)}
				role="button"
				tabIndex="0"
			>
				<span className="stations-item-title">{name}</span>
				<span className="stations-item-frequency">{frequency}</span>
			</div>
			<div className="stations-item-controls">{children}</div>
		</div>
	);
};

const { element, number, string } = PropTypes;

StationItem.propTypes = {
	name: string.isRequired,
	frequency: number.isRequired,
	children: element.isRequired
};

export default StationItem;
