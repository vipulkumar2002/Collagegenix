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

// const addNewProfile = ()=>{
//   //get card data

// }
