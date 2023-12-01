getPokemons();
getPokemonDetail();

function getCurrentPath() {
    return window.location.pathname;
}

function getCurrentSearch () {
    return window.location.search;
}

function getPokemons() {
    const currentPath = getCurrentPath();
    let getContent = document.querySelector('.content-pok');
    let contentPokemons = "";

    if (currentPath === "/") {

    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(resp => {
            const pokemons = resp.results;

            pokemons.forEach(pokemon => {
                const getId = pokemon.url.split('/', -1)[6];

                contentPokemons += `<div class="card-pok">
                                        <a href="/pokemon.html?id=${getId}">
                                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${getId}.gif" alt="${pokemon.name}" />
                                            <h2>${pokemon.name}</h2>
                                        </a>
                                    </div>`
            });
            getContent.innerHTML = contentPokemons;
        });

    }
}

function getPokemonDetail() {
    const currentPath = getCurrentPath()
    const currentParamUrl = getCurrentSearch()
    const idPokemon = currentParamUrl.split('=')[1];
    const titlePokemon = document.querySelector('#title-pkemon');
    const imgPokemon = document.querySelector('.content-img');

    if (currentPath != "/") {
        fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
        .then(response => response.json())
        .then(resp => {
            const pokemon = resp;
            titlePokemon.textContent = pokemon.name;
            imgPokemon.innerHTML = `<img src="${pokemon.sprites.front_default}" alt='s' />`;
        });
    }
    
}