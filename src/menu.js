import margheritaImage from "./images/margherita.jpeg";
import pepperoniImage from "./images/pepperoni.png";
import capricciosaImage from "./images/capricciosa.png";
import hawaiiImage from "./images/hawajska.png";

const menuData = [
  {
    title: "Margherita",
    price: "32 PLN",
    description: "sos, ser, oregano, oliwa",
    image: margheritaImage,
  },
  {
    title: "Pepperoni",
    price: "36 PLN",
    description:
      "Dla fanów ostrości: sos, podwójna mozzarella, pikantne salami pepperoni.",
    image: pepperoniImage,
  },
  {
    title: "Capricciosa",
    price: "38 PLN",
    description:
      "Bogata kompozycja: szynka parmeńska, pieczarki, karczochy, oliwki.",
    image: capricciosaImage,
  },
  {
    title: "Hawajska",
    price: "35 PLN",
    description: "Słodko-słona: sos, ser, szynka gotowana, soczysty ananas.",
    image: hawaiiImage,
  },
  {
    title: "Wegetariańska",
    price: "34 PLN",
    description:
      "Ogród na talerzu: papryka, kukurydza, cebula czerwona, pomidorki cherry.",
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
  image.classList.add("imageMenu");

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
