import React from "react";

//include images into your bundle
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import { Fragment, useState } from "react";

//This is the main content area for the home page
const Home = () => {
	return (
		<fragment>
			<div className="container">
				{/*This is the jumbotron*/}
				<Jumbotron />

				{/*This is where the cards go*/}
				<Cards />

			</div>
		</fragment>
	);
};

export default Home;
