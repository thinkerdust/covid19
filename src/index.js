import "jquery/dist/jquery.min.js"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./css/style.css";
import main from "./js/main.js";
import washhand from './img/1.png';
import usemask from './img/2.png';
import scldistancing from './img/3.png';

document.querySelector('#WashHand').src = washhand;
document.querySelector('#UseMask').src = usemask;
document.querySelector('#SclDistancing').src = scldistancing;

document.addEventListener("DOMContentLoaded", main);