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
    id: 'awp-brasil',
    titulo: 'Projeto AWP Brasil',
    link: 'https://atcawpbrasil.com.br/',
    img: './Imagens/projetos-img/Assistencia_AWP.png',
  },
  {
    id: 'app-mata-mosquito',
    titulo: 'APP Mata Mosquito',
    link: './Projetos/App_Mata_Mosquito/inicio_jogo.html',
    img: './Imagens/projetos-img/App-mata-mosquito.png',
  },
  {
    id: 'pesquisa-de-usuarios',
    titulo: 'Pesquisa de Usuários ',
    link: './Projetos/Pesquisa-de-usuarios/index.html',
    img: './Imagens/projetos-img/Pesquisa_de_usuarios.png',
  },
  {
    id: 'pokedex',
    titulo: 'Pokedex',
    link: './Projetos/pokedex-master/index.html',
    img: './Imagens/projetos-img/Pokedez.png',
  },
  {
    id: 'controle-financeiro-pessoal',
    titulo: 'Controle Financeiro Pessoal',
    link: 'https://gabriel-controlhe-financeiro.herokuapp.com/',
    img: './Imagens/projetos-img/Controlhe-finaceiro.png',
  },
  {
    id: 'radio-podcast',
    titulo: 'Rádio Podcast',
    link: './Projetos/radio-podcast-pronto/index.html',
    img: './Imagens/projetos-img/Radio_Podcast.png',
  },
  {
    id: 'manipulador-de-cores',
    titulo: 'Manipulador de Cores',
    link: './Projetos/Manipulando_cores/index.html',
    img: './Imagens/projetos-img/Manipulador_de_cores.png',
  },
  {
    id: 'react-countries',
    titulo: 'React Countries',
    link: 'https://gabriel-react-countries.herokuapp.com/',
    img: './Imagens/projetos-img/React-Countries.png',
  },
  {
    id: 'react-salary',
    titulo: 'React Salary',
    link: 'https://grabriel-salary.herokuapp.com/',
    img: './Imagens/projetos-img/React-salary.png',
  },
  {
    id: 'react-juros-compostosy',
    titulo: 'React - Juros Compostos',
    link: 'https://react-juros-compostos.herokuapp.com/',
    img: './Imagens/projetos-img/Rect_juros_compostos.png',
  },
  {
    id: 'tabela-brasileirão',
    titulo: 'Tabela Brasileirão',
    link: './Projetos/Brasileirão/index.html',
    img: './Imagens/projetos-img/Tabela-Brasileirao.png',
  },
];

const redesSociais = [
  {
    id: 'email',
    link: 'mailto:gabrielmarinhodossantoscd@gmail.com',
    img:
      './Imagens/email-open-envelope-in-a-rounded-square_icon-icons.com_70497.png',
  },
  {
    id: 'github',
    link: 'https://github.com/gabrielMarinhocd/',
    img: './Imagens/github-logo_icon-icons.com_73546.png',
  },
  {
    id: 'email',
    link: 'https://www.linkedin.com/in/gabriel-marinho-5094bb132',
    img: './Imagens/linkedin-sign_icon-icons.com_73508.png',
  },
];

const insertMenuDropdown = () => {
  const idDropdown = document.querySelector('#dropdown1');
  const navMobile = document.querySelector('#dropdown-mobile');

  let liHTML =
    '<li class="center"><a href="#projetos">Todos</a></li> <li class="divider" tabindex="0"></li>';
  menu.forEach(({ id, titulo, link }) => {
    liHTML += ` <li id="li-${id}">
        <a id="link-${id}" href="${link}" target="_blank"
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
  menu.forEach(({ id, titulo, link, img }) => {
    gradeHTML += `  <a id="link-${id}" class="carousel-item modal-trigger"  href="${link}" target="_blank"
              ><img id="img-${id}"
                class="img-carosel"
                src="${img}"
              />
              <span id="span-${id}" >${titulo}</span>
            </a>`;
  });

  caroselHTML.innerHTML = gradeHTML;
};

const inserRedesSociais = () => {
  const redesSociaisHTML = document.querySelector('#redes-sociais');
  let gradeHTML = '';
  redesSociais.forEach(({ id, link, img }) => {
    gradeHTML += ` <div class="zoom" id="${id}">
            <a id="link-${id}" href='${link}' target="_blank">
              <img
                id="img-${id}"
                src="${img}"
                class="img-responsive"
            /></a>
          </div>`;
  });

  redesSociaisHTML.innerHTML = gradeHTML;
};

insertMenuDropdown();
insertCarosel();
inserRedesSociais();

// {
// id: 'falcao-pipa',
//   titulo: 'Falcão Pipa - TCC',
//     link: 'https://falcao-pipa.herokuapp.com/ ',
//       img: './Imagens/projetos-img/Falcao_pipa.png',
//   },
