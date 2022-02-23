import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
// const cardContainer = document.querySelector(".card-container");
// let globleCardData = [];

// const generateHTML = (cardData) => {
//   return `<div id=${cardData.id} className="card card-container">
//   <img
//     src=${cardData.image}
//     className=" card-image"
//     alt="..."
//   />

//   <div className="card-body">
//     <h6  className="card-title">${cardData.name}</h6>
//     <h6 className="card-text">${cardData.position}</h6>
//     <h6>${cardData.company}</h6>
//     <a href="#" className="btn btn-primary ">
//       LinkedIn
//     </a>
//   </div>
// </div>`;
// };

// let saveToLocalStorage = () => {
//   localStorage.setItem("firstCard", JSON.stringify({ card: globleCardData }));
// };

// let insertToDom = () => {
//   cardContainer.insertAdjacentHTML("beforeend", content);
// };

// const addNewCard = () => {
//   //get card data
//   let cardData = {
//     id: `${Date.now()}`,
//     image: document.getElementById("imageUrl").value,
//     name: document.getElementById("personName").value,
//     position: document.getElementById("position").value,
//     company: document.getElementById("companyName").value,
//   };
//   globleCardData.push(cardData);
//   saveToLocalStorage();

//   let newCard = generateHTML(cardData);
//   insertToDom(newCard);

//   //clear the form
//   document.getElementById("imageUrl").value = "";
//   document.getElementById("personName").value = "";
//   document.getElementById("position").value = "";
//   document.getElementById("companyName").value = "";
// };
