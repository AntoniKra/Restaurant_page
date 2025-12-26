import "./style.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import logoImage from "./images/logo.png";

loadHome();

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");
const logo = document.getElementById("logo");

logo.src = logoImage;

function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

homeBtn.addEventListener("click", () => {
  console.log("Kliknięto HOME");
  clearContent();
  loadHome();
});

menuBtn.addEventListener("click", () => {
  console.log("Kliknięto MENU");
  clearContent();
  loadMenu();
});

contactBtn.addEventListener("click", () => {
  console.log("Kliknięto CONTACT");
  clearContent();
  loadContact();
});
