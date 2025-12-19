import homeImage from "./images/home.png";

export default function loadHome() {
  const content = document.getElementById("content");

  const header = document.createElement("h1");
  header.textContent = "Witamy w PizzaHUB!";

  const text = document.createElement("p");
  text.textContent = "Serwujemy pizzę prosto z pieca.";

  const home = document.createElement("img");
  home.src = homeImage;
  home.classList.add("homeImage");

  const hoursContainer = document.createElement("div");
  hoursContainer.classList.add("hoursContainer");

  const hoursTitle = document.createElement("h2");
  hoursTitle.textContent = "HOURS";

  const hoursList = document.createElement("div");
  hoursList.classList.add("hours");
  hoursList.textContent = `Sunday: 8am - 8pm
  
Monday: 6am - 6pm

Tuesday: 6am - 6pm

Wednesday: 6am - 6pm

Thursday: 6am - 10pm

Friday: 6am - 10pm

Saturday: 8am - 10pm`;

  const locationContainer = document.createElement("div");
  locationContainer.classList.add("locationContainer");

  const locationTitle = document.createElement("h2");
  locationTitle.textContent = "Location";

  const location = document.createElement("div");
  location.textContent = "Liwska 2 03-391 Waraszawa";

  hoursContainer.appendChild(hoursTitle);
  hoursContainer.appendChild(hoursList);

  locationContainer.appendChild(locationTitle);
  locationContainer.appendChild(location);

  content.appendChild(header);
  content.appendChild(text);
  content.appendChild(home);
  content.appendChild(hoursContainer);
  content.appendChild(locationContainer);
}
