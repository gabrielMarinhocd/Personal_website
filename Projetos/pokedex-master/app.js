const apiPokemon = [];

window.addEventListener('load', async () => {
  await getApiPokemon();
  await mapPokemom(apiPokemon);
});

const mapPokemom = async (allApiPokemom) => {
  const pokedexHTML = document.querySelector('#pokedex');

  let accumulator = '';

  allApiPokemom.forEach(({ name, id, types }) => {
    const type = types[0].type.name;

    let allType = '';

    if (types[1] != undefined) {
      allType = `${type} | ${types[1].type.name}`;
    } else {
      allType = type;
    }

    accumulator += `
           <a data-toggle="modal"
        data-target="#pokemon-modal-${id}"> <li class="card ${type}" >
            <img class="card-image" alt="${name}"
               src="https://pokeres.bastionbot.org/images/pokemon/${id}.png"/>
            <h2 class="card-title">${id}. ${name}</h2>
            <p class="card-subtitle">${allType}</p>
            </li>
            </a>
            `;
  });

  pokedexHTML.innerHTML = accumulator;
  const loader = document.querySelector('#loader');
  loader.innerHTML = ' ';
};

const getApiPokemon = async () => {
  for (let i = 1; i <= 100; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    apiPokemon.push(await res.json());
  }
};
