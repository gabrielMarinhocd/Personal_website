const divFeedback = document.querySelector('#feedback');
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

  const buttonFooter = document.querySelector('#menu12');
  buttonFooter.addEventListener('click', menuFooter);
});

const verificaHora = async () => {
  let stamp = new Date();
  let sours;
  let time;
  let hours = stamp.getHours();
  if (hours >= 18 && hours < 24) {
    time = 'tenha uma boa noite';
  }

  if (hours >= 12 && hours < 18) {
    time = ' tenha uma boa tarde';
  }

  if (hours >= 0 && hours < 12) {
    time = ' tenha um bom dia';
  }
  document.querySelector('#boas-vindas').innerHTML = time;
  await fetch('https://gabrielmarinho.herokuapp.com');
};

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

const insertMenuDropdownTrabalhos = () => {
  const idDropdown = document.querySelector('#dropdown2');
  const navMobile = document.querySelector('#dropdown-mobile2');

  let liHTML =
    '<li class="center"><a href="#trabalhos">Todos</a></li> <li class="divider" tabindex="0"></li>';
  menuTrabalhos.forEach(({ id, titulo, link }) => {
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

const insertCaroselTrabalhos = () => {
  const caroselHTML = document.querySelector('#carouselTrabalhos');

  let gradeHTML = '';
  menuTrabalhos.forEach(({ id, titulo, link, img, subTitulo }) => {
    gradeHTML += `  <a id="link-${id}" class="carousel-item modal-trigger"  href="${link}" target="_blank"
              ><img id="img-${id}"
                class="img-carosel"
                src="${img}"
              />
              <span id="span-${id}" >${titulo}</span>
              <br/>
              <span id="span-sub${id}" >${subTitulo}</span>
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

const feedback = async (event) => {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#inputEmail').value;
  const menssagem = document.querySelector('#menssagem').value;

  if (name !== '' && email !== '' && menssagem !== '' && stars !== 0) {
    const preeloader = ` <h3 class="title-sobre">Deixe seu feedback</h3>
     <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>`;

    divFeedback.innerHTML = preeloader;

    const data = new Date();

    const sendFeedback = await fetch(
      `https://gabrielmarinho.herokuapp.com?name=${name}&email=${email}&menssagem=${menssagem}&nota=${stars}&data=${data}`,
      {
        method: 'POST',
      }
    );
    await agradecimento(sendFeedback.ok);
  } else {
    alert('Preencha todos os campos');
  }
};

const agradecimento = (res) => {
  if (res) {
    const feedbackCadastrado = `<div class=" animate__animated animate__jackInTheBox  ">
              <h3 class="title-sobre"> Obrigado pelo feedback</h3>
              <img class="like-img" src="./Imagens/like.png" alt="like" />
            </div>`;
    divFeedback.innerHTML = feedbackCadastrado;
  }
};

let op = 0;
const menuFooter = () => {
  const showIcons = document.querySelector('#menu-footer');
  let log;

  if (op === 0) {
    let log = showIcons.classList.remove('deactivate');
    showIcons.classList.add('active');
    op = 1;
  } else {
    const log = showIcons.classList.remove('active');
    showIcons.classList.add('deactivate');
    op = 0;
  }
};

insertMenuDropdown();
insertMenuDropdownTrabalhos();
insertCarosel();
insertCaroselTrabalhos();
inserRedesSociais();

const inputValue = document.querySelector('#form');
inputValue.addEventListener('submit', (event) => event.preventDefault());

// {
// id: 'falcao-pipa',
//   titulo: 'Falcão Pipa - TCC',
//     link: 'https://falcao-pipa.herokuapp.com/ ',
//       img: './Imagens/projetos-img/Falcao_pipa.png',
//   },
