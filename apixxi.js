/// http://localhost/API/equipos.json
const searchInput = document.getElementById('search-input');
const provinciaSelect = document.getElementById('provincia-select');
const fundadoSelect = document.getElementById('fundado-select');
const teamList = document.getElementById('team-list');
const categoriaSelect = document.getElementById('categoria-select');
let allTeamsData; // Variable para almacenar todos los datos de equipos

// Hacer la solicitud fetch y renderizar la lista de equipos inicialmente
//fetch("https://cors-anywhere.herokuapp.com/http://localhost/API/equipos.json")                   
//fetch("http://localhost:80/API/equipos.json")
fetch("http://localhost/API/equipos.json") //ES LA UNICA QUE FUNCIONO HASTA QUE SE BLOQUEO"
//fetch('http://localhost/API/equipos.json')
//fetch("http://localhost:8080/API/equipos.json")
//fetch("../API/equipos.json")
    .then(response => response.json())
    .then(data => {
        allTeamsData = data; // Almacena todos los datos de equipos
        renderTeamList(data); // Renderiza la lista de equipos inicial
        // Agrega event listeners
        addEventListeners();
    })
    .catch(error => console.error('Error:', error));

// Función para agregar event listeners a los elementos
function addEventListeners() {
    // Listener para el input de búsqueda
    searchInput.addEventListener('input', () => {
        filterAndRenderTeams();
    });

    // Listener para el select de provincia
    provinciaSelect.addEventListener('change', () => {
        filterAndRenderTeams();
    });

    // Listener para el select de año de fundación
    fundadoSelect.addEventListener('change', () => {
        filterAndRenderTeams();
    });
    // Listener para el select de categoria
    categoriaSelect.addEventListener('change', () => {
        filterAndRenderTeams();
    });
}
// Función para agregar opciones al select de año de fundación
//function addFundadoOptions() {
    //const uniqueFundados = [...new Set(allTeamsData.map(team => team.fundado))];
    //uniqueFundados.forEach(fundado => {
      //const option = document.createElement('option');
      //option.value = fundado;
      //option.text = fundado;
      //fundadoSelect.appendChild(option);
    //});
  //}
  
  // Llama a la función para agregar opciones al select de año de fundación
  //addFundadoOptions();
// Función para filtrar los equipos y renderizar la lista
function filterAndRenderTeams() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = allTeamsData.filter(team => {
        return team.name.toLowerCase().includes(searchTerm) &&
            (provinciaSelect.value === 'all' || team.provincia === provinciaSelect.value) &&
            (fundadoSelect.value === 'all' || team.fundado === parseInt(fundadoSelect.value))&&
            (categoriaSelect.value === 'all' || team.Categoria === categoriaSelect.value);
    });
    renderTeamList(filteredData);
}

// Función para renderizar la lista de equipos
function renderTeamList(data) {
    teamList.innerHTML = '';
    data.forEach(team => {
        const teamItem = document.createElement('div');
        teamItem.classList.add('team-item'); 
        teamItem.innerHTML = `
            <img src="${team.logo}" alt="${team.name}" width="50">
            <h2>${team.name} </h2>
            <p>Provincia: ${team.provincia}</p>
            <p>Fundado en: ${team.fundado}</p>
            <p>Estadio: ${team.estadio}</p>
            <p>construido: ${team.construido}</p>
            <p>capacidad: ${team.capacidad}</p>
            <p>Campeonatos profesionales: ${team.campprof}</p>
            <p>Campeonatos amateurs: ${team.campamat}</p>
            <p>Categoria: ${team.Categoria}</p>
        `;
        teamList.appendChild(teamItem);
    });
}
