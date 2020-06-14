window.addEventListener('load', () => {
  const getPokemonUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;

  const generetePokemonPromises = () =>
    Array(150)
      .fill()
      .map((_, index) =>
        fetch(getPokemonUrl(index + 1)).then((response) => response.json())
      );

  const generateHTML = (pokemons) =>
    pokemons.reduce((accumulator, { name, id, types }) => {
      const ElementTypes = types.map((typeInfo) => typeInfo.type.name);

      accumulator += `
          <li class="card ${ElementTypes[0]}">
          <img class="card-image" alt="${name}"
             src="https://pokeres.bastionbot.org/images/pokemon/${id}.png"/>
          <h2 class="card-title">${id}. ${name}</h2>
          <p class="card-subtitle">${ElementTypes.join(' | ')}</p>
          </li>
          `;
      return accumulator;
    }, '');

  const insertPokemonIntoPage = (pokemons) => {
    const ul = document.querySelector('[data-js="pokedex"]');
    ul.innerHTML = pokemons;
  };

  const pokemonPromises = generetePokemonPromises();

  Promise.all(pokemonPromises).then(generateHTML).then(insertPokemonIntoPage);
});
