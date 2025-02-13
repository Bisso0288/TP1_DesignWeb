document.addEventListener("DOMContentLoaded", function () {
  const apercu = document.getElementById("image-aperçu"); // Image déclencheur
  const carrousel = document.getElementById("carrousel-zoo");
  const modalImage = document.getElementById("image-active");
  const closeModal = document.getElementById("fermer-carrousel");
  const prevButton = document.getElementById("precedent-carrousel");
  const nextButton = document.getElementById("suivant-carrousel");

  let currentIndex = 0;
  const imagesArray = [
    "assets/img/zoo1.jpg",
    "assets/img/zoo2.jpg",
    "assets/img/zoo3.jpg",
    "assets/img/zoo4.jpg",
    "assets/img/zoo5.jpg",
    "assets/img/zoo6.jpg",
  ];

  // Ouvrir le carrousel en cliquant sur l’image d’aperçu
  apercu.addEventListener("click", function () {
    currentIndex = 0; // On commence par la première image
    openCarrousel(imagesArray[currentIndex]);
  });

  // Fonction pour ouvrir le carrousel
  function openCarrousel(src) {
    carrousel.style.display = "flex";
    modalImage.src = src;
  }

  // Fermer le carrousel
  closeModal.addEventListener("click", function () {
    carrousel.style.display = "none";
  });

  // Naviguer dans le carrousel
  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % imagesArray.length;
    modalImage.src = imagesArray[currentIndex];
  });

  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
    modalImage.src = imagesArray[currentIndex];
  });

  // Fermer avec la touche Échap
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      carrousel.style.display = "none";
    }
  });
});
