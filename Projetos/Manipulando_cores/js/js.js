window.addEventListener('load', start);
let red = document.querySelector('#red');
let green = document.querySelector('#green');
let blue = document.querySelector('#blue');
const blockColor = document.querySelector('#cores-salvas');
let acumulator = '';
let quadro = document.querySelector('#quadro');
let span = document.querySelector('#mostrar');
const bodyHTML = document.querySelector('#body');
let spanColor = 'rgb(0,0,0)';

const spanRed = document.querySelector('#vRed');
const spanGreen = document.querySelector('#vGreen');
const spanBlue = document.querySelector('#vBlue');

function start() {
  // Recuperando dado do input

  red.addEventListener('change', vermelho);
  green.addEventListener('change', verde);
  blue.addEventListener('change', azul);
  const star = document.querySelector('#star');

  star.addEventListener('click', () => {
    insertColorOptions();
  });
}

function vermelho(event) {
  spanRed.innerHTML = event.target.value;
  adicionaCor();
}

function verde(event) {
  spanGreen.innerHTML = event.target.value;
  adicionaCor();
}

function azul() {
  spanBlue.innerHTML = event.target.value;
  adicionaCor();
}

function adicionaCor() {
  red = document.querySelector('#red').value;
  green = document.querySelector('#green').value;
  blue = document.querySelector('#blue').value;

  span.textContent = 'rgb(' + red + ',' + green + ',' + blue + ')';
  const rgb = `rgb( ${red} , ${green} , ${blue} )`;
  //Adicionando cor de fundo
  quadro.style.backgroundColor = rgb;
  bodyHTML.style.backgroundColor = rgb;
  spanColor = rgb;
}

const insertColorOptions = () => {
  acumulator += `<div class="block-color" onClick="handleFavorite(
    '${spanColor}'
  )" style="background-color:${spanColor} "> </div>`;

  blockColor.innerHTML = acumulator;
};

const handleFavorite = (rgb) => {
  // Retirando os espaços
  span.innerHTML = rgb.replace(/\s/g, '');
  const arr = rgb.split(' ');

  spanBlue.innerHTML = arr[1];
  spanGreen.innerHTML = arr[3];
  spanRed.innerHTML = arr[5];
  document.querySelector('#red').value = arr[1];
  document.querySelector('#green').value = arr[3];
  document.querySelector('#blue').value = arr[5];

  quadro.style.backgroundColor = rgb;
  bodyHTML.style.backgroundColor = rgb;
};
