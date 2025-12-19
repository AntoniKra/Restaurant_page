import margheritaImage from "./images/margherita.jpeg";

const menuData = [
  {
    title: "Margherita",
    price: "32 PLN",
    description: "sos, ser, oregano, oliwa",
    image: margheritaImage,
  },
];

function addToMenu(pizza) {
  const card = document.createElement("div");
  card.classList.add("card");

  const divMenu = document.createElement("div");
  divMenu.classList.add("divMenu");

  const dishName = document.createElement("h2");
  dishName.classList.add("dishName");
  dishName.textContent = pizza.title;

  const image = document.createElement("img");
  image.src = pizza.image;
  image.alt = pizza.title;

  const price = document.createElement("div");
  price.classList.add("price");
  price.textContent = pizza.price;

  const description = document.createElement("p");
  description.classList.add("description");
  description.textContent = pizza.description;

  divMenu.appendChild(dishName);
  divMenu.appendChild(image);
  card.appendChild(divMenu);
  card.appendChild(price);
  card.appendChild(description);

  return card;
}

export default function loadMenu() {
  const content = document.getElementById("content");

  const menuList = document.createElement("div");
  menuList.classList.add("menuList");

  menuData.forEach((pizza) => {
    const card = addToMenu(pizza);
    menuList.appendChild(card);
  });

  content.appendChild(menuList);
}
