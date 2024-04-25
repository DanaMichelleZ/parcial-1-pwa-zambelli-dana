const URL_ENDOPOINT = 'https://pokeapi.co/api/v2/';
const URL_POKEMONES = URL_ENDOPOINT + 'pokemon';

const mostrarPokemon = (pokemon) => {
    const pokedex = document.getElementById("pokedex")

    const li = document.createElement('li');
    li.addEventListener('click', () => {
        mostrarDetalle(pokemon.id)
    })

    const titulo = document.createElement('h3');
    titulo.innerText = pokemon.name;
    li.appendChild(titulo);

    const descripcion = document.createElement('p');
    li.appendChild(descripcion);

    pokedex.appendChild(li);
    
}

const mostrarDetalle = (id) => {
    window.location.href = "http://127.0.0.1:5500/detalle.html?id=" + id
}


fetch(URL_POKEMONES)
.then(data => data.json())
.then(result => {
    const results = result.results; 

    const primerResultado = results [5];
    mostrarPokemon(primerResultado);
})