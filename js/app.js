const desplazarArriba = document.getElementById("desplazarse-hacia-arriba");

desplazarArriba.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
});

/* Menu hamburguesa */
const burguer = document.getElementById("menu-hamburguesa");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burguer.addEventListener("click", ()=> {
  ul.classList.toggle("show")
})

/* Cerrar el menu hamburguesa cuando se clickea enlace */
// Seleccionar enlaces

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);