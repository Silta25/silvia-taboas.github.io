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

// GALERIA 3
let indiceActual = 0;
const imagenes3 = ["./img/pronokal/pro3.gif", "./img/pronokal/pro1.jpg", "./img/pronokal/pro4.jpg", "./img/pronokal/pro2.jpg"];

function abrirPopup3(indice) {
  indiceActual = indice;
  document.getElementById("imagen-popup3").src = imagenes3[indiceActual];
  document.getElementById("popup3").style.display = "flex";
}

function cerrarPopup3() {
  document.getElementById("popup3").style.display = "none";
}

function cambiarFoto3(direccion) {
  indiceActual = (indiceActual + direccion + imagenes3.length) % imagenes3.length;
  document.getElementById("imagen-popup3").src = imagenes3[indiceActual];
}

// PACIENTES / KV

let indices = {
    carrusel1: 0,
    carrusel2: 0,
    carrusel3: 0,
  };

  let intervalos = {
    carrusel1: null,
    carrusel2: null
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