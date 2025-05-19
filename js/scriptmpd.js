   // FONDO GRADIENT
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const height = (document.body.scrollHeight - window.innerHeight)/2;
      const scrollPercentage = scrollY / height;
      // Interpolación de colores
      const startColor = [243, 237, 247]; // RGB de #f4e4ce
      const endColor = [166, 137, 190];  // RGB de #ff9999

      const red = Math.floor(startColor[0] + (endColor[0] - startColor[0]) * scrollPercentage);
      const green = Math.floor(startColor[1] + (endColor[1] - startColor[1]) * scrollPercentage);
      const blue = Math.floor(startColor[2] + (endColor[2] - startColor[2]) * scrollPercentage);

      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });

// MPD

const imagenes = ["./img/mpd/mpd1.gif", "./img/mpd/mpd2.gif", "./img/mpd/mpd3.jpg", "./img/mpd/mpd4.jpg", "./img/mpd/mpd5.gif"];

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

// MPD

let indice = 0;

function moverCarrusel(direccion) {
  const slides = document.querySelector(".slides");
  const totalSlides = slides.children.length;
  indice = (indice + direccion + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${indice * 100}%)`;
}

// diptico

function moverCarrusel2(direccion) {
  const slides = document.querySelector(".diptic");
  const totalSlides = slides.children.length;
  indice = (indice + direccion + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${indice * 100}%)`;
}

// triptico

function moverCarrusel3(direccion) {
  const slides = document.querySelector(".triptic");
  const totalSlides = slides.children.length;
  indice = (indice + direccion + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${indice * 100}%)`;
}






