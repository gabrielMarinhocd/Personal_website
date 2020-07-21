window.addEventListener('load', start);
let red = document.querySelector('#red');
let green = document.querySelector('#green');
let blue = document.querySelector('#blue');

function start() {
  // Recuperando dado do input

  red.addEventListener('change', vermelho);
  green.addEventListener('change', verde);
  blue.addEventListener('change', azul);
}

function vermelho(event) {
  //salvando valor do input
  //var valorRed = event.target.value;

  //Adcionando o valor ao input disable
  const spanRed = document.querySelector('#vRed');
  spanRed.innerHTML = event.target.value;
  adicionaCor();
}

function verde(event) {
  //var valorGreen = event.target.value;
  const spanGreen = document.querySelector('#vGreen');
  spanGreen.innerHTML = event.target.value;
  adicionaCor();
}

function azul() {
  //var valorBlue = event.target.value;
  const spanBlue = document.querySelector('#vBlue');
  spanBlue.innerHTML = event.target.value;
  adicionaCor();
}

function adicionaCor() {
  red = document.querySelector('#red').value;
  green = document.querySelector('#green').value;
  blue = document.querySelector('#blue').value;
  let quadro = document.querySelector('#quadro');
  let span = document.querySelector('#mostrar');
  const bodyHTML = document.querySelector('#body');

  span.textContent = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

  //Adicionando cor de fundo
  quadro.style.backgroundColor = `rgb(${red},${green},${blue})`;
  bodyHTML.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
