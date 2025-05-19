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

// MPD

let indice = 0;

function moverCarrusel(direccion) {
  const slides = document.querySelector(".slides");
  const totalSlides = slides.children.length;
  indice = (indice + direccion + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${indice * 100}%)`;
}

// carrusel 2

function moverCarrusel2(direccion) {
  const slides = document.querySelector(".triptic");
  const totalSlides = slides.children.length;
  indice = (indice + direccion + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${indice * 100}%)`;
}

// carrusel 3

function moverCarrusel3(direccion) {
  const slides = document.querySelector(".slides3");
  const totalSlides = slides.children.length;
  indice = (indice + direccion + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${indice * 100}%)`;
}
// carrusel 4

function moverCarrusel4(direccion) {
  const slides = document.querySelector(".slides4");
  const totalSlides = slides.children.length;
  indice = (indice + direccion + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${indice * 100}%)`;
}
// carrusel 4

function moverCarrusel5(direccion) {
  const slides = document.querySelector(".slides5");
  const totalSlides = slides.children.length;
  indice = (indice + direccion + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${indice * 100}%)`;
}








