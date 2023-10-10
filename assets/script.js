const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
// Variable qui permet de connaître l'image sur laquelle on se trouve
let currentSlideIndex = 0;

// Selectionne la banniére
const banner = document.getElementById("banner");

// EventListener flèche gauche
const arrowLeft = document.querySelector(".arrow_left");
console.log(arrowLeft);
arrowLeft.addEventListener("click", () => {
  console.log("fleche gauche on click");
  changeSlide(-1);
});

// EventListener flèche droite
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () => {
  console.log("fleche droite on click");
  changeSlide(1);
});

// Fonction pour faire défiler les slides
function changeSlide(direction) {
  currentSlideIndex = currentSlideIndex + direction;
  console.log(currentSlideIndex);

  if (currentSlideIndex > 3) currentSlideIndex = 0;
  if (currentSlideIndex < 0) currentSlideIndex = 3;

  const currentSlide = slides[currentSlideIndex];

  // Selectionne l'élément de l'image de la bannière
  const bannerImage = document.querySelector("#banner .banner-img");
  bannerImage.src = `./assets/images/slideshow/${currentSlide.image}`;

  // Sélectionne le texte de la bannière
  const bannerText = document.querySelector("#banner p");
  bannerText.innerHTML = currentSlide.tagLine;
}

//sélectionner les points
const dots = document.querySelectorAll(".dot");
// mise à jour des points indicateurs en fonction de la diapositive affichée
function updateDots() {
// pour chaque point
  dots.forEach((dot, index) => {
// Si l'index du point correspond à celui de la diapositive affichée
    if (index === currentSlideIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}
// Pour que la diapositive affichée corresponde au point cliqué
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlideIndex = index;
    changeSlide(0);
  });
});

// Initialiser le slider avec la première diapositive
changeSlide(0);
