import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const Context = React.createContext(null);

const RadioStructure = props => {
	const [stations, setStations] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [activeStation, setActiveStation] = useState("");
	const [error, setError] = useState(false);

	useEffect(() => {
		fetchStations();
	}, []);

	const fetchStations = async () => {
		setError(false);
		const url = "https://teclead.de/recruiting/radios";
		try {
			const response = await axios.get(url);
			setStations(response.data.radios);
			setIsLoading(false);
		} catch (err) {
			console.error(err);
			setIsLoading(false);
			setError(true);
		}
	};

	const toggleControls = name => {
		if (activeStation === name) {
			setActiveStation("");
		} else {
			setActiveStation(name);
			localStorage.setItem("active-station", name);
		}
	};

	const togglePower = () => {
		if (activeStation) {
			setActiveStation("");
		} else {
			const lastActiveStation =
				localStorage.getItem("active-station") ||
				"Click on a station to start playback";
			setActiveStation(lastActiveStation);
		}
	};

	return (
		<Context.Provider
			value={{
				activeStation,
				error,
				isLoading,
				togglePower,
				stations,
				toggleControls
			}}
		>
			{props.children}
		</Context.Provider>
	);
};

export default RadioStructure;

const { arrayOf, bool, func, number, shape, string } = PropTypes;

Context.Provider.propTypes = {
	value: shape({
		activeStation: string.isRequired,
		isLoading: bool.isRequired,
		togglePower: func.isRequired,
		stations: arrayOf(
			shape({
				name: string.isRequired,
				frequency: number.isRequired,
				image: string.isRequired
			})
		),
		toggleControls: func.isRequired
	}).isRequired
};
