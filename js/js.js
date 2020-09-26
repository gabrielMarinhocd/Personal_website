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
    time = 'tenha uma boa noite';
  }

  if (hours >= 12 && hours < 18) {
    time = ' tenha uma boa tarde';
  }

  if (hours >= 0 && hours < 12) {
    time = ' tenha um bom dia';
  }
  document.querySelector('#boas-vindas').innerHTML = time;
}

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

const feedback = async () => {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#inputEmail').value;
  const menssagem = document.querySelector('#menssagem').value;

  const sendFeedback = await fetch(
    `http://localhost:3000?name=${name}&email=${email}&menssagem=${menssagem}&nota=${stars}`,
    {
      method: 'POST',
    }
  );
  alert('Obrigado pelo seu feedback');
};

insertMenuDropdown();
insertMenuDropdownTrabalhos();
insertCarosel();
insertCaroselTrabalhos();
inserRedesSociais();

// {
// id: 'falcao-pipa',
//   titulo: 'Falcão Pipa - TCC',
//     link: 'https://falcao-pipa.herokuapp.com/ ',
//       img: './Imagens/projetos-img/Falcao_pipa.png',
//   },
