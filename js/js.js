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
  } else {
    logo.innerHTML = 'Gabriel Marinho';
  }
  window.addEventListener('resize', function () {
    let tamanhaoDeTela = $(window).width();
    if (tamanhaoDeTela < 1000) {
      logo.innerHTML = 'GM';
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

const menu = [
  {
    titulo: 'Projeto AWP Brasil',
    link: 'https://atcawpbrasil.com.br/',
    img: './Imagens/projetos-img/Assistencia_AWP.png',
  },
  {
    titulo: 'APP Mata Mosquito',
    link: './Projetos/App_Mata_Mosquito/inicio_jogo.html',
    img: './Imagens/projetos-img/App-mata-mosquito.png',
  },
  {
    titulo: 'Pesquisa de usuários ',
    link: './Projetos/Pesquisa-de-usuarios/index.html',
    img: './Imagens/projetos-img/Pesquisa_de_usuarios.png',
  },
  {
    titulo: 'Pokedex',
    link: './Projetos/pokedex-master/index.html',
    img: './Imagens/projetos-img/Pokedez.png',
  },
  {
    titulo: 'Controlhe Financeiro Pessoal',
    link: 'https://gabriel-controlhe-financeiro.herokuapp.com/',
    img: './Imagens/projetos-img/Controlhe-finaceiro.png',
  },
];

const insertMenuDropdown = () => {
  const idDropdown = document.querySelector('#dropdown1');
  const navMobile = document.querySelector('#dropdown-mobile');

  let liHTML =
    '<li><a href="#projetos">Todos</a></li> <li class="divider" tabindex="0"></li>';
  menu.forEach(({ titulo, link }) => {
    liHTML += ` <li>
        <a href="${link}" target="_blank"
          >${titulo}</a
        >
      </li>`;
  });
  idDropdown.innerHTML = liHTML;
  navMobile.innerHTML = liHTML;
};

const insertCarosel = () => {
  const caroselHTML = document.querySelector('#carousel');
  let gradeHTML = '';
  menu.forEach(({ titulo, link, img }) => {
    gradeHTML += `  <a class="carousel-item modal-trigger"  href="${link}" target="_blank"
              ><img
                class="img-carosel"
                src="${img}"
              />
              <span>${titulo}</span>
            </a>`;
  });

  caroselHTML.innerHTML = gradeHTML;
};

insertMenuDropdown();
insertCarosel();
