export default function loadContact() {
  const content = document.getElementById("content");


  const contactTitle = document.createElement("h1")
  contactTitle.textContent = "Contact Us"

  const contactContener = document.createElement("div");
  contactContener.classList.add("contactContener") 


  const instagram = document.createElement("div");

  const instaIcon = document.createElement("i")
  instaIcon.classList.add("fa-brands", "fa-instagram")

  const instaText = document.createElement("p")
  instaText.textContent = "PizzaHub";

  instagram.appendChild(instaIcon)
  instagram.appendChild(instaText)
  contactContener.appendChild(instagram)


  const facebook = document.createElement("div");
  
  const faceIcon = document.createElement("i")
  faceIcon.classList.add("fa-brands", "fa-facebook")

  const faceText = document.createElement("p")
  faceText.textContent = "PizzaHub"

  facebook.appendChild(faceIcon)
  facebook.appendChild(faceText)
  contactContener.appendChild(facebook)


  const twitter = document.createElement("div");

  const twitterIcon = document.createElement("i")
  twitterIcon.classList.add("fa-brands", "fa-twitter")

  const twitterText = document.createElement("p")
  twitterText.textContent = "PizzaHub"

  twitter.appendChild(twitterIcon)
  twitter.appendChild(twitterText)
  contactContener.appendChild(twitter)


  const youtube = document.createElement("div");
  
  const youtubeIcon = document.createElement("i")
  youtubeIcon.classList.add("fa-brands", "fa-youtube")

  const youtubeText = document.createElement('p')
  youtubeText.textContent = "pizzhubYT"

  youtube.appendChild(youtubeIcon)
  youtube.appendChild(youtubeText)
  contactContener.appendChild(youtube)

  

  content.appendChild(contactTitle)
  content.appendChild(contactContener)
  


}
