const tableHTML = document.querySelector('#tabelaBrasileirao');
let gradeHTML = '';
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
  });
  console.log(grades);
};

const insertTable = (grade, grades) => {
  grade.forEach(({ id, pos, j, v, d, e, gc, gp, sg, pg, ap }) => {
    const dados = grades[1].find((teste) => teste.id == id);
    const { brasao, sigla } = dados;
    let styleZona = '';

    if (pos <= 6) {
      styleZona = 'zona-libertadores';
    } else if (pos >= 7 && pos <= 8) {
      styleZona = 'zona-preLibertadores';
    } else if (pos >= 9 && pos <= 14) {
      styleZona = 'zona-sulAmericana';
    } else if (pos > 16) {
      styleZona = 'zona-rebaixamento';
    }

    gradeHTML += ` <tr> 
    
    <td ><span class="zona ${styleZona}" >${pos}</span></td>
    <td><img class="brasao" src="${brasao}"/></td>
    <td>${sigla} </td>
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
