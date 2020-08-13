const tableHTML = document.querySelector('#tabelaBrasileirao');
const modalHTML = document.querySelector('#conteudo-modal');
let gradeHTML = '';
let gradeModalHTML = '';
const idTimes = [
  1,
  3,
  4,
  5,
  6,
  9,
  11,
  12,
  13,
  15,
  17,
  22,
  24,
  25,
  29,
  30,
  33,
  35,
  695,
  1138,
];

window.addEventListener('load', () => {
  gradeHTML += `<tr class="titulos-td">
                  <td></td>
                  <td>Club</td>
                  <td></td>
                  <td>J</td>
                  <td>V</td>
                  <td>E</td>
                  <td>D</td>
                  <td>GP</td>
                  <td>GC</td>
                  <td>SG</td>
                  <td>Pts</td>
                  <td>Apr</td>
               
               </tr>`;
  handleApi();
});

const handleApi = () => {
  let grades = [];
  let gradeClassificacao = [];
  let gradeEquipes = [];

  times.forEach(({ fases, equipes }) => {
    for (let i = 0; i < idTimes.length; i++) {
      gradeClassificacao.push(fases[2878].classificacao.equipe[idTimes[i]]);
      gradeEquipes.push(equipes[idTimes[i]]);
    }
    gradeClassificacao.sort((a, b) => a.pos - b.pos);
    grades = [gradeClassificacao, gradeEquipes];
    insertTable(gradeClassificacao, grades);
    insertModal(gradeClassificacao, grades);
  });
  console.log(grades);
  console.log(times);
};

const insertTable = (grade, grades) => {
  grade.forEach(({ id, pos, j, v, d, e, gc, gp, sg, pg, ap }) => {
    const dados = grades[1].find((teste) => teste.id == id);
    const { brasao, sigla } = dados;
    let styleZona = '';
    let icon = ' ';

    if (pos == 1) {
      icon = '<img class="trofeu" src="./img/trofeu.png" />';
    } else if (pos > 16) {
      icon = '<img class="seta-rebaixados" src="./img/sete-para-baixo.png" />';
    }

    if (pos <= 6) {
      styleZona = 'zona-libertadores';
    } else if (pos >= 7 && pos <= 8) {
      styleZona = 'zona-preLibertadores';
    } else if (pos >= 9 && pos <= 14) {
      styleZona = 'zona-sulAmericana';
    } else if (pos > 16) {
      styleZona = 'zona-rebaixamento';
    }

    gradeHTML += `   <tr id="tr-${sigla}" data-toggle="modal" data-target="#modal-${sigla}"> 
    
    <td >  <span class="zona ${styleZona}" >${pos}</span> ${icon}</td>
    <td><img class="brasao" src="${brasao}"/></td>
    <td> ${sigla} </td>
    <td>${j.total} </td> 
    <td> ${v.total} </td> 
    <td> ${e.total} </td> 
    <td>${d.total} </td> 
    <td> ${gp.total} </td>
    <td>${gc.total} </td> 
    <td>${sg.total} </td>
    <td>${pg.total} </td>
    <td>${ap}%</td>
  </tr>
 `;
  });

  tableHTML.innerHTML = gradeHTML;
};
const insertModal = (grade, grades) => {
  grade.forEach(({ id, pos, j, v, d, e, gc, gp, sg, pg, ap }) => {
    const dados = grades[1].find((teste) => teste.id == id);
    const { brasao, sigla, nome, cor1, cor2 } = dados;
    let icon = ' ';

    if (pos == 1) {
      icon = '<img class="trofeu" src="./img/trofeu.png" />';
    } else if (pos > 16) {
      icon = '<img class="seta-rebaixados" src="./img/sete-para-baixo.png" />';
    }

    gradeModalHTML += `<div
        class="modal fade "
        id="modal-${sigla}"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5  class="modal-title" id="title-modal-${sigla}">${nome} ${icon}</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
             <div class="container" align="center">
               <h4 >Dados do Club</h4>
              <div class="row">

                <div class="col">
                 <img  src="${brasao}"/>
                </div>
                <div class="col">
                <span class="titulos-td">Cores:</span> <br/>
                  <div class=" span-color" style="background-color: ${cor1}"> </div>
                  <div class=" span-color" style="background-color: ${cor2}"> </div>
                </div>
                <div class="col">
                <span class="titulos-td">Posição:</span> <br/> ${pos}
                </div>
                <div class="col">
                <span class="titulos-td">Aproveitamento:</span> <br/> ${ap}%
                </div>
               
              </div>
                <div class="row">
                  <div class="col">
                    <span class="titulos-td"> </span>
                  </div>
                  <div class="col">
                    <span class="titulos-td">Total de pontos:  </span> <br/> ${pg.total}
                  </div>
                  <div class="col">
                    <span class="titulos-td">Pontos  Mandante:  </span> <br/> ${pg.mandante}
                  </div>
                  <div class="col">
                    <span class="titulos-td">Pontos  Visitante:  </span> <br/> ${pg.visitante}
                  </div>
               
                </div>
                <hr />
                <h4 >Partidas</h4>
               <div class="row">
                  <div class="col">
                    <span class="titulos-td">Vitórias:  </span> <br/> ${v.total}
                  </div>
                  <div class="col">
                    <span class="titulos-td">Vitórias Mandante:  </span> <br/> ${v.mandante}
                  </div>
                  <div class="col">
                    <span class="titulos-td">Vitórias Visitante:  </span> <br/> ${v.visitante}
                  </div>
              </div>
               <div class="row">
                  <div class="col">
                    <span class="titulos-td">Empates:  </span> <br/> ${e.total}
                  </div>
                  <div class="col">
                    <span class="titulos-td">Empates Mandante:  </span> <br/> ${e.mandante}
                  </div>
                  <div class="col">
                    <span class="titulos-td">Empates Visitante:  </span> <br/> ${e.visitante}
                  </div>
              </div>
               <div class="row">
                  <div class="col">
                    <span class="titulos-td">Derrotas:  </span> <br/> ${d.total}
                  </div>
                  <div class="col">
                    <span class="titulos-td">Derrotas Mandante:  </span> <br/> ${d.mandante}
                  </div>
                  <div class="col">
                    <span class="titulos-td">Derrotas Visitante:  </span> <br/> ${d.visitante}
                  </div>
              </div>
              <hr />
                <h4 >Gols</h4>
               <div class="row">
                  <div class="col">
                    <span class="titulos-td">Gols feitos:  </span> <br/> ${gp.total}
                  </div>
                  <div class="col">
                    <span class="titulos-td">Gols sofridos:  </span> <br/> ${gc.total}
                  </div>
                  <div class="col">
                    <span class="titulos-td">Saldo de Gols:  </span> <br/> ${sg.total}
                  </div>
              </div>
           
            
            </div>
            </div>
            <div class="modal-footer">
             
            </div>
          </div>
        </div>
      </div>
 `;
  });

  modalHTML.innerHTML = gradeModalHTML;
};
