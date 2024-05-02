const URL_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon';
        const URL_POKEMONS = URL_ENDPOINT + "?offset=0&limit=100";

        const listaPokemon = (pokemon) => {
            const pokedex = document.getElementById("pokedex");

            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = "detalle.html?id=" + pokemon.id;
            link.innerText = pokemon.name;
            li.appendChild(link);

            pokedex.appendChild(li);
        }

        fetch(URL_POKEMONS)
        .then(response => response.json())
        .then(data => {
            const pokemons = data.results;
            pokemons.forEach(pokemon => {
                listaPokemon({
                    id: getIdFromUrl(pokemon.url),
                    name: pokemon.name
                });
            });
        })
        .catch(error => {
            console.error('Error fetching pokemons:', error);
        });

        function getIdFromUrl(url) {
            const parts = url.split('/');
            return parts[parts.length - 2];
        }