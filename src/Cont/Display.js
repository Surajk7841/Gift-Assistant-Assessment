import "./Display.css";
import React from "react";
function Display(props) {
  const footballs = ["Football", "Gloves", "Football Shoes"];
  const crickets = ["Ball", "Cricket Gloves", "Cricket Shoes"];
  const Music = ["Earphones", "Guitar", "Music player"];
  const Photography = [
    "Camera",
    "Camera lens",
    "Tripod stand",
    "Camera filter",
  ];
  const Cooking = ["Cookware set", "Cooking utensils", "Recipe books"];
  const Art = ["Paints", "Canvas", "Art supplies"];
  const Reading = ["Bestselling novels", "Book series", "Bookstore gift card"];
  const Technology = [
    "Smartphone",
    "Wireless headphones",
    "Gadget accessories",
  ];

  const displaHandler = () => {
    if (props.category === "football") {
      return footballs;
    } else if (props.category === "cricket") {
      return crickets;
    } else if (props.category === "music") {
      return Music;
    } else if (props.category === "photography") {
      return Photography;
    } else if (props.category === "cooking") {
      return Cooking;
    } else if (props.category === "art") {
      return Art;
    } else if (props.category === "reading") {
      return Reading;
    } else if (props.category === "technology") {
      return Technology;
    } else {
      return [];
    }
  };

  const itemsToDisplay = displaHandler(props);

  let message = "";

  if (props.category === "football") {
    message = "Items for football:";
  } else if (props.category === "cricket") {
    message = "Items for cricket:";
  } else if (props.category === "music") {
    message = "Items for music:";
  } else if (props.category === "photography") {
    message = "Items for Photography:";
  } else if (props.category === "cooking") {
    message = "Items for Cooking:";
  } else if (props.category === "art") {
    message = "Items for Art:";
  } else if (props.category === "reading") {
    message = "Items for Reading:";
  } else if (props.category === "technology") {
    message = "Items for Technology:";
  } else {
    message = "Invalid category.";
  }

  return (
    <div className="display">
      <p>{message}</p>
      <ul>
        {itemsToDisplay.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default Display;
