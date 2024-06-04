// script.js

const inputNombre = document.getElementById("input-nombre");
const selectEspecie = document.getElementById("select-especie");
const selectGenero = document.getElementById("select-genero");
const contenedorPersonajes = document.getElementById("personajes");

fetch("https://rickandmortyapi.com/api/character")
 .then(response => response.json())
 .then(datos => {
    const personajes = datos.results;
    

    // Función para filtrar personajes
    function filtrarPersonajes() {
      const nombre = inputNombre.value.toLowerCase();
      const especie = selectEspecie.value;
      const genero = selectGenero.value;

      const personajesFiltrados = personajes.filter(personaje => {
        const nombreCoincide = personaje.name.toLowerCase().includes(nombre);
        const especieCoincide = especie === "" || personaje.species === especie;
        const generoCoincide = genero === "" || personaje.gender === genero;

        return nombreCoincide && especieCoincide && generoCoincide;
      });

      mostrarPersonajes(personajesFiltrados);
    }

    // Función para mostrar personajes
    function mostrarPersonajes(personajes) {
      contenedorPersonajes.innerHTML = "";

      personajes.forEach(personaje => {
        const contenedorPersonaje = document.createElement("div");
        contenedorPersonaje.className = "personaje";

        contenedorPersonaje.innerHTML = `
          <h4>${personaje.name}</h4>
          <img src="${personaje.image}">
        `;

        contenedorPersonajes.appendChild(contenedorPersonaje);
      });
    }

    // Event listeners para los filtros
    inputNombre.addEventListener("input", filtrarPersonajes);
    selectEspecie.addEventListener("change", filtrarPersonajes);
    selectGenero.addEventListener("change", filtrarPersonajes);

    // Mostrar todos los personajes al inicio
    filtrarPersonajes();
  });