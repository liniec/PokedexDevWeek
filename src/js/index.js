const pokemons = document.querySelectorAll('.pokemon');

pokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const idPokemonSelecionado = pokemon.getAttribute('id');
        const cartaoAbrir = document.getElementById('cartao-' + idPokemonSelecionado);

        const cartaoAberto = document.querySelector('.aberto');
        if (cartaoAberto) {
            cartaoAberto.classList.remove('aberto');
        }

        if (cartaoAbrir) {
            cartaoAbrir.classList.add('aberto');
        }

        const pokemonAtivoNaLista = document.querySelector('.ativo');
        if (pokemonAtivoNaLista) {
            pokemonAtivoNaLista.classList.remove('ativo');
        }

        const pokemonSelecionadoNaLista = document.getElementById(idPokemonSelecionado);
        if (pokemonSelecionadoNaLista) {
            pokemonSelecionadoNaLista.classList.add('ativo');
        }
    });
});
