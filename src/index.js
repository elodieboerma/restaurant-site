import {loadHomePage} from "./home.js";
import {loadMenuPage} from "./menu.js";
import {loadContactPage} from "./contact.js";
import "./styles.css";

const contentDiv = document.getElementById("content");
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

loadHomePage();

home.addEventListener("click", () => {
    contentDiv.textContent = "";
    loadHomePage();
})

menu.addEventListener("click", () => {
    contentDiv.textContent = "";
    loadMenuPage();
})

contact.addEventListener("click", () => {
    contentDiv.textContent = "";
    loadContactPage();
})