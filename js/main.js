getPokemons();

function getPokemons() {
    let getContent = document.querySelector('.content-pok');
    let contentPokemons = "";

    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(resp => {
            const pokemons = resp.results;
            console.log('resp', pokemons);

            pokemons.forEach(pokemon => {
                const getId = pokemon.url.split('/', -1)[6];
                console.log('getId', getId);

                contentPokemons += `<div class="card-pok">
                                        <a href="${pokemon.url}">
                                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${getId}.gif" alt="${pokemon.name}" />
                                            <h2>${pokemon.name}</h2>
                                        </a>
                                    </div>`
            });
            getContent.innerHTML = contentPokemons;
        });


    console.log('content pok', getContent);
}