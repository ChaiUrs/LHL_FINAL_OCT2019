import axios from "axios";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
axios.defaults.baseURL = process.env.SERVER_URL || "http://localhost:8000";

export default function getTaxiLocations(req, res) {
	const options = {
		method: "GET",
		url: "/api/taxis"
	};
	return axios(options).then(response => {
		console.log(response.data.result);
		const taxis = [];
		for (let taxi of response.data.result) {
			taxis.push({ lat: taxi.lat, lng: taxi.long, driverId: taxi.driverId });
			// taxis.push(
			// 	`<Marker
			// 		title={${taxi.driverId}}
			// 		name={${taxi.driverId}}
			// 		position={ lat: ${taxi.lat}, lng: ${taxi.long} }
			// 	/>`
			// );
		}
		return taxis;
		// res.send(response.data.result);
	});
}
