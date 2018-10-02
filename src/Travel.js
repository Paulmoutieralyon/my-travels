import React from "react";

const Travel = ({destination, country, image, distance}) => (
    <div>
   		<div>
			<h1> {destination} </h1>
			<h2> {country} </h2>
			<img src={image} alt={country}/>
			<p> {distance} </p>
   		</div>
	</div>

);

export default Travel;