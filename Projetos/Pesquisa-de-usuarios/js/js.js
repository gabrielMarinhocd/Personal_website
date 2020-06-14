let nameInput = null;
let allPeoples = [];

let names = [];
let tabNames = null;

let spanTotal = 0;
let totalPeoples = 0;
//homem = male
let countMale = 0;
let countFemale = 0;

let countIdade = 0;
let MediaIdade = 0;

let numberFormat = 0;
let carregamento = null;

window.addEventListener('load', () => {
  const inputValue = document.querySelector('#form');
  inputValue.addEventListener('keyup', activeInput);
  inputValue.addEventListener('submit', recebendoForm);
});

// capturando evento quando apertar buscar
function recebendoForm(event) {
  clearInput();
  event.preventDefault();

  tabNames = document.querySelector('#peoples');
  nameInput = document.querySelector('#name').value.toLowerCase();
  activeBar();
  fetchNames();
}

//Abilitando butão
function activeInput(event) {
  document.querySelector('#button').disabled = false;
}

// Fazendo busca na api
async function fetchNames() {
  const res = await fetch(
    'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
  );
  const json = await res.json();
  allPeoples = json.results.map((people) => {
    // Eliminando a chamdada desnecessaria EX: country.numericCode
    const { name, picture, dob, gender } = people;

    return {
      name: name.first + ' ' + name.last,
      gender,
      picture: picture.large,
      dob: dob.age,
    };
  });
}

function findNames() {
  //Procurando nomes
  names = allPeoples.filter((people) =>
    people.name.toLowerCase().includes(nameInput)
  );
  renderNames();
}

function renderNames() {
  let namesHTML = '<div>';

  names
    .sort((a, b) => {
      //return b.name.length - a.name.length;
      return a.name.localeCompare(b.name);
    })
    .forEach((people) => {
      const { name, picture, dob, gender } = people;

      const peoplesHTML = `
      <div class="divider"></div>
      <h5 align="center" id="totalPeoples"></h5>
      <div class="divider collection "></div>
          <div class="section grid-text collection-item">
           <div grid-iten-img> <img class="imagens" src="${picture}" alt="${name}" /> </div> 
           <div>${name},
            ${dob} anos
            </div>
          </div>
          <div class="divider"></div> 
    `;

      namesHTML += peoplesHTML;

      namesHTML += '</div>';
      tabNames.innerHTML = namesHTML;
    });
  renderEstatistica();
}

function renderEstatistica() {
  spanTotal = document.querySelector('#totalPeoples');
  spanTotal.textContent = names.length + ' Usuários escontrados';

  const divConteudoEstatistica = document.querySelector('#conteudoEstatistica');

  names.forEach((people) => {
    const { name, picture, dob, gender } = people;
    if (gender === 'male') {
      countMale++;
    } else {
      countFemale++;
    }
    countIdade = countIdade + dob;
  });

  mediaIdade = countIdade / names.length;

  const conteudoHTML = `
  <div class="divider"></div>
    <h5 aling="center"> Dados estatísticos </h5>
  <div class="divider"></div>
    <ul>
      <li><b>Quantidade de homens:</b> ${countMale}</li>
      <li><b>Quantidade de Mulheres: </b> ${countFemale}</li>
      <li><b>Soma das idades: </b> ${countIdade} </li>
      <li>
      <b>Media das idades:</b> ${mediaIdade.toFixed(2)}
      </li>
    </ul>  
    <div class="divider"></div>
    `;

  /*   carregamento = document.querySelector('#carregamento');
  const carregaomSucesso = `<h5 aling="center" class="carrego-com-sucesso"> Carregando... </h5> 
   `;
  //<h5 aling="center" class="carrego-com-sucesso"> Carregado com suceso!!  </h5>
  //<img class="icon" src="./imagens/afirmativo.png" alt="" /> */
  //carregamento.innerHTML = carregaomSucesso;
  window.setTimeout(function () {
    divConteudoEstatistica.innerHTML = conteudoHTML;
    carregamento.innerHTML = '';
  }, 0500);
}
const clearInput = () => {
  countMale = 0;
  countFemale = 0;
  countIdade = 0;
  mediaIdade = 0;
  allnames = [];
  allPeoples = [];
  names = [];
};

function activeBar() {
  carregamento = document.querySelector('#carregamento');
  const barraCarregamento = `
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
    <h5 aling="center" class="carrego-com-sucesso"> Carregando... </h5> 
    `;
  carregamento.innerHTML = barraCarregamento;
  window.setTimeout(function () {
    findNames();
  }, 2500);
}
