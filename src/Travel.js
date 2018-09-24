import React from "react";

const Travel = ({ destination, pays, image, distance }) => (
  <figure>
    <img src={image} alt={pays} />
    <figcaption>
      <blockquote>{destination}</blockquote>
      <cite>{pays}</cite>
    </figcaption>
    <cite>{distance}</cite>
  </figure>
);

export default Travel;