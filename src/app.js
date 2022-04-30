/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const cardBodyNumber = () => {
    const randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 11) return "J";
    else if (randomNumber === 12) return "Q";
    else if (randomNumber === 13) return "K";
    else if (randomNumber === 1) return "A";
    else return randomNumber;
  };

  const suitSelected = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    if (randomNumber === 1) return "J";
    else if (randomNumber === 12) return "Q";
    else if (randomNumber === 13) return "K";
    else if (randomNumber === 1) return "A";
    else return randomNumber;
  };
  document.querySelector(".card-body").innerHTML = cardBodyNumber();
  document.querySelector(".card-body").innerHTML = cardBodyNumber();
};
