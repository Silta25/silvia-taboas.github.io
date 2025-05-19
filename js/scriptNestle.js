   // FONDO GRADIENT
   window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const height = (document.body.scrollHeight - window.innerHeight)/2;
    const scrollPercentage = scrollY / height;
    // Interpolación de colores
    const startColor = [243, 237, 247]; 
    const endColor = [166, 137, 190];  

    const red = Math.floor(startColor[0] + (endColor[0] - startColor[0]) * scrollPercentage);
    const green = Math.floor(startColor[1] + (endColor[1] - startColor[1]) * scrollPercentage);
    const blue = Math.floor(startColor[2] + (endColor[2] - startColor[2]) * scrollPercentage);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  });

// STAND

let indiceActual = 0;
const imagenes2 = ["./img/nestle/nes1.jpg", "./img/nestle/nes2.jpg", "./img/nestle/nes3.jpg", "./img/nestle/nes4.jpg", "./img/nestle/nes5.jpg", "./img/nestle/nes6.jpg", "./img/nestle/nes7.jpg"];

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

// MERITENE

const imagenes = ["./img/nestle/meri1.jpg", "./img/nestle/meri2.jpg", "./img/nestle/meri3.gif", "./img/nestle/meri4.gif", "./img/nestle/meri5.gif"];

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


// PRECETAS

let indices = {
    carrusel1: 0,
    
  };

  let intervalos = {
    carrusel1: null,
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
iniciarAutoplay("carrusel2");
iniciarAutoplay("carrusel3");
