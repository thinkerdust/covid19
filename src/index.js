import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import main from "./js/main.js";
import washhand from './img/4.png';
import usemask from './img/5.png';
import scldistancing from './img/6.png';

document.querySelector('#WashHand').src = washhand;
document.querySelector('#UseMask').src = usemask;
document.querySelector('#SclDistancing').src = scldistancing;

document.addEventListener("DOMContentLoaded", main);