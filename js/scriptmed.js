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

// GALERIA 2


let indiceActual = 0;
const imagenes = ["./img/mediclinics/med1.jpg", "./img/mediclinics/med2.jpg", "./img/mediclinics/med3.jpg", "./img/mediclinics/med4.jpg", "./img/mediclinics/med5.jpg", "./img/mediclinics/med6.jpg"];

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

// GALERIA CAT

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
// BABY

let indices = {
  carrusel1: 0,
  carrusel2: 0,
  carrusel3: 0,
};

let intervalos = {
  carrusel1: null,
  carrusel2: null, 
  carrusel3: null,
};  

function moverCarrusel(direccion, carruselId) {
  const carrusel = document.getElementById(carruselId);
  const slides = carrusel.querySelector(".slides");
  const totalSlides = slides.children.length;
  indices[carruselId] = (indices[carruselId] + direccion + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${indices[carruselId] * 100}%)`;
  // Pausar y reiniciar el autoplay al hacer clic
pausarYReiniciarAutoplay(carruselId);
}

// Función para iniciar el autoplay
function iniciarAutoplay(carruselId) {
  intervalos[carruselId] = setInterval(() => {
  moverCarrusel(1, carruselId); // Avanzar automáticamente
}, 4000);
}


// Función para pausar y reiniciar el autoplay después de un clic
function pausarYReiniciarAutoplay(carruselId) {
clearInterval(intervalos[carruselId]); // Detener el autoplay actual
setTimeout(() => {
  iniciarAutoplay(carruselId); // Reiniciar el autoplay después de 5 segundos
}, 4000); // Ajusta el tiempo de pausa si lo deseas
}

// Iniciar el autoplay para ambos carruseles al cargar la página
// iniciarAutoplay("carrusel1");
iniciarAutoplay("carrusel1");
iniciarAutoplay("carrusel2");
iniciarAutoplay("carrusel3");
