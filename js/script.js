   // FONDO GRADIENT
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const height = (document.body.scrollHeight - window.innerHeight)/2;
      const scrollPercentage = scrollY / height;
      // Interpolación de colores
      const startColor = [244, 247, 247]; // RGB de #f4e4ce
      const endColor = [54, 116, 124];  // RGB de #ff9999

      const red = Math.floor(startColor[0] + (endColor[0] - startColor[0]) * scrollPercentage);
      const green = Math.floor(startColor[1] + (endColor[1] - startColor[1]) * scrollPercentage);
      const blue = Math.floor(startColor[2] + (endColor[2] - startColor[2]) * scrollPercentage);

      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });

// GALERIA 1

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// GALERIA 2


  let indiceActual = 0;
const imagenes = ["./img/borges/canuncios.jpg", "./img/borges/cbanderola.jpg", "./img/borges/cmovil.jpg", "./img/borges/ccartel.jpg", "./img/borges/cganadores.gif"];

function abrirPopup(indice) {
  indiceActual = indice;
  document.getElementById("imagen-popup").src = imagenes[indiceActual];
  document.getElementById("popup").style.display = "flex";
}

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
}

function cambiarFoto(direccion) {
  indiceActual = (indiceActual + direccion + imagenes.length) % imagenes.length;
  document.getElementById("imagen-popup").src = imagenes[indiceActual];
}

// recetas

// GALERIA 2


// let indiceActual = 0;
const imagenes2 = ["./img/borges/retokv.jpg", "./img/borges/retorevista.jpg", "./img/borges/retosuper.jpg", "./img/borges/retobanderola.jpg", "./img/borges/retodiptico.jpg"];

function abrirPopup2(indice) {
  indiceActual = indice;
  document.getElementById("imagen-popup2").src = imagenes2[indiceActual];
  document.getElementById("popup2").style.display = "flex";
}

function cerrarPopup2() {
  document.getElementById("popup2").style.display = "none";
}

function cambiarFoto2(direccion) {
  indiceActual = (indiceActual + direccion + imagenes2.length) % imagenes2.length;
  document.getElementById("imagen-popup2").src = imagenes2[indiceActual];
}

// recetas

let indice = 0;

function moverCarrusel(direccion) {
  const slides = document.querySelector(".slides");
  const totalSlides = slides.children.length;
  indice = (indice + direccion + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${indice * 100}%)`;
}



