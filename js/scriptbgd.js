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

// GALERIA 3

let indiceActual = 0;
const imagenes = ["./img/bgd/bgd1.jpg", "./img/bgd/bgd2.jpg", "./img/bgd/bgd3.jpg", "./img/bgd/bgd4.jpg", "./img/bgd/bgd5.jpg", "./img/bgd/bgd6.jpg"];

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