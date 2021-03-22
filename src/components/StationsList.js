import React, { useContext } from "react";
import { Context } from "../Context";
import EachStation from "./StationItem";
import StationCenter from "./StationCenter";

const StationsList = () => {
	const { error, stations, isLoading } = useContext(Context);

	const ListStations = stations.map(({ name, frequency, image }) => (
		<EachStation key={name} name={name} frequency={frequency}>
			<StationCenter logo={image} />
		</EachStation>
	));

	return (
		<div className="stations">
			{error && <p className="stations-error">Something went wrong. Error!</p>}
			{isLoading ? <div id="spinner" /> : ListStations}
		</div>
	);
};

export default StationsList;
