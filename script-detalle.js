const URL_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (id) {
        fetch(`${URL_ENDPOINT}/${id}`)
            .then(response => response.json())
            .then(data => mostrarDetallePokemon(data))
            .catch(error => {
                console.error('Error fetching pokemon details:', error);
            });
    } else {
        console.error('No se encontró el ID del Pokémon en la URL.');
    }
});

function mostrarDetallePokemon(pokemon) {
    const detallePokemon = document.getElementById("detalle-pokemon");

    if (detallePokemon) {
        detallePokemon.innerHTML = `
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <p>Altura: ${pokemon.height}</p>
            <p>Peso: ${pokemon.weight}</p>
            <h3>Habilidades:</h3>
            <ul>
                ${pokemon.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
            </ul>
        `;
    } else {
        console.error('No se encontró el elemento con id="detalle-pokemon" en el DOM.');
    }
}