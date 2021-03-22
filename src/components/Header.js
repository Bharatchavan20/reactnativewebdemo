import React, { useContext } from "react";
import { Context } from "../Context";

const Header = () => {
	const { togglePower } = useContext(Context);

	return (
		<div className="header">
			<i className="fal fa-angle-left header-angle" />
			<h3>stations</h3>
			<i
				className="far fa-power-off header-power"
				onClick={togglePower}
				onKeyUp={togglePower}
				role="button"
				tabIndex="0"
			/>
		</div>
	);
};

export default Header;