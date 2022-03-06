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
//     alt="img"
//   />

//   <div className="card-body">
//     <h6  className="card-title">${cardData.name}</h6>
//     <h6 className="card-text">${cardData.position}</h6>
//     <h6>${cardData.company}</h6>
//     <a href="#" id=${cardData.id} className="btn btn-primary ">
//       LinkedIn
//     </a>
//   </div>
// </div>`;
// };

// let saveToLocalStorage = () => {
//   //convart json into string
//   localStorage.setItem("firstCard", JSON.stringify({ card: globleCardData }));
// };

// let insertToDOM = (content) => {
//   cardContainer.insertAdjacentHTML("beforeend", content);
// };

// const addNewCard = () => {
//   //get card data
//   let cardData = {
//     id: `${Date.now()}`, //uniqe no for card id
//     image: document.getElementById("imageUrl").value,
//     name: document.getElementById("personName").value,
//     position: document.getElementById("jobRole").value,
//     company: document.getElementById("companyName").value,
//   };
//   globleCardData.push(cardData);
//   saveToLocalStorage();

//   let newCard = generateHTML(cardData);
//   insertToDOM(newCard);

//   //clear the form
//   document.getElementById("imageUrl").value = "";
//   document.getElementById("personName").value = "";
//   document.getElementById("position").value = "";
//   document.getElementById("companyName").value = "";

//   return;
// };

// const loadExistingCards = () => {
//   let getData = localStorage.getData("firstCard");

//   if (!getData) return;

//   //parse -> string into json -> opposite of  stringify
//   let profileCards = JSON.parse(getData);

//   //whatever data we get -> assign into array

//   globleCardData = profileCards.card;
//   globleCardData.map((cardData) => {
//     let newCard = generateHTML(cardData);
//     insertToDOM(newCard);
//   });
// };

// const deleteCard = (event) => {
//   let targetID = event.target.getAttribute("name");
//   let elementType = event.target.tagName;

//   let removeTask = globleCardData.filter((task) => task.id !== targetID);
//   globleCardData = removeTask;

//   saveToLocalStorage();

//   if (elementType === "BUTTON") {
//     return cardContainer.removeChild(
//       event.target.parentNode.parentNode.parentNode
//     );
//   } else {
//     return cardContainer.removeChild(
//       event.target.parentNode.parentNode.parentNode.parentNode
//     );
//   }
// };
