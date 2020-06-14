window.addEventListener('load', () => {
  verificaHora();

  document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.dropdown-trigger');
    let instances = M.Dropdown.init(elems, options);
  });

  document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.dropdown-trigger1');
    let instances = M.Dropdown.init(elems, options);
  });

  const logo = document.querySelector('#logo-container');
  let tamanhaoDeTela = $(window).width();
  if (tamanhaoDeTela < 1000) {
    logo.innerHTML = 'GM';
    console.log($(window).width());
  } else {
    logo.innerHTML = 'Gabriel Marinho';
  }
  window.addEventListener('resize', function () {
    let tamanhaoDeTela = $(window).width();
    if (tamanhaoDeTela < 1000) {
      logo.innerHTML = 'GM';
      console.log($(window).width());
    } else {
      logo.innerHTML = 'Gabriel Marinho';
    }
  });
});

function verificaHora() {
  let stamp = new Date();
  let sours;
  let time;
  let hours = stamp.getHours();
  if (hours >= 18 && hours < 24) {
    time = 'tenha uma boa noite ';
  }

  if (hours >= 12 && hours < 18) {
    time = ' tenha uma boa tarde ';
  }

  if (hours >= 0 && hours < 12) {
    time = ' tenha um bom dia ';
  }
  document.querySelector('#boas-vindas').innerHTML = time;
}
