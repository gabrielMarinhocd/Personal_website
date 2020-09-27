let stars = 0;

function Avaliar(estrela) {
  let url = window.location;
  url = url.toString();
  url = url.split('index.html');
  url = url[0];
  stars = estrela;

  let s1 = document.getElementById('s1').src;
  let s2 = document.getElementById('s2').src;
  let s3 = document.getElementById('s3').src;
  let s4 = document.getElementById('s4').src;
  let s5 = document.getElementById('s5').src;
  let avaliacao = 'Não avaliado';

  if (estrela == 5) {
    if (s5 == url + 'Imagens/star0.png') {
      document.getElementById('s1').src = 'Imagens/star1.png';
      document.getElementById('s2').src = 'Imagens/star1.png';
      document.getElementById('s3').src = 'Imagens/star1.png';
      document.getElementById('s4').src = 'Imagens/star1.png';
      document.getElementById('s5').src = 'Imagens/star1.png';
      avaliacao = 'Ótimo';
    } else {
      document.getElementById('s1').src = 'Imagens/star1.png';
      document.getElementById('s2').src = 'Imagens/star1.png';
      document.getElementById('s3').src = 'Imagens/star1.png';
      document.getElementById('s4').src = 'Imagens/star1.png';
      document.getElementById('s5').src = 'Imagens/star1.png';
      avaliacao = 'Ótimo';
    }
  }

  //ESTRELA 4
  if (estrela == 4) {
    if (s4 == url + 'Imagens/star0.png') {
      document.getElementById('s1').src = 'Imagens/star1.png';
      document.getElementById('s2').src = 'Imagens/star1.png';
      document.getElementById('s3').src = 'Imagens/star1.png';
      document.getElementById('s4').src = 'Imagens/star1.png';
      document.getElementById('s5').src = 'Imagens/star0.png';
      avaliacao = 'Muito Bom';
    } else {
      document.getElementById('s1').src = 'Imagens/star1.png';
      document.getElementById('s2').src = 'Imagens/star1.png';
      document.getElementById('s3').src = 'Imagens/star1.png';
      document.getElementById('s4').src = 'Imagens/star0.png';
      document.getElementById('s5').src = 'Imagens/star0.png';
      avaliacao = 'Bom';
    }
  }

  //ESTRELA 3
  if (estrela == 3) {
    if (s3 == url + 'Imagens/star0.png') {
      document.getElementById('s1').src = 'Imagens/star1.png';
      document.getElementById('s2').src = 'Imagens/star1.png';
      document.getElementById('s3').src = 'Imagens/star1.png';
      document.getElementById('s4').src = 'Imagens/star0.png';
      document.getElementById('s5').src = 'Imagens/star0.png';
      avaliacao = 'Bom';
    } else {
      document.getElementById('s1').src = 'Imagens/star1.png';
      document.getElementById('s2').src = 'Imagens/star1.png';
      document.getElementById('s3').src = 'Imagens/star0.png';
      document.getElementById('s4').src = 'Imagens/star0.png';
      document.getElementById('s5').src = 'Imagens/star0.png';
      avaliacao = 'Pode melhorar';
    }
  }

  //ESTRELA 2
  if (estrela == 2) {
    if (s2 == url + 'Imagens/star0.png') {
      document.getElementById('s1').src = 'Imagens/star1.png';
      document.getElementById('s2').src = 'Imagens/star1.png';
      document.getElementById('s3').src = 'Imagens/star0.png';
      document.getElementById('s4').src = 'Imagens/star0.png';
      document.getElementById('s5').src = 'Imagens/star0.png';
      avaliacao = 'Pode melhorar';
    } else {
      document.getElementById('s1').src = 'Imagens/star1.png';
      document.getElementById('s2').src = 'Imagens/star0.png';
      document.getElementById('s3').src = 'Imagens/star0.png';
      document.getElementById('s4').src = 'Imagens/star0.png';
      document.getElementById('s5').src = 'Imagens/star0.png';
      avaliacao = '';
    }
  }

  //ESTRELA 1
  if (estrela == 1) {
    if (s1 == url + 'Imagens/star0.png') {
      document.getElementById('s1').src = 'Imagens/star1.png';
      document.getElementById('s2').src = 'Imagens/star0.png';
      document.getElementById('s3').src = 'Imagens/star0.png';
      document.getElementById('s4').src = 'Imagens/star0.png';
      document.getElementById('s5').src = 'Imagens/star0.png';
      avaliacao = 'Tem muito a melhorar';
    } else {
      document.getElementById('s1').src = 'Imagens/star0.png';
      document.getElementById('s2').src = 'Imagens/star0.png';
      document.getElementById('s3').src = 'Imagens/star0.png';
      document.getElementById('s4').src = 'Imagens/star0.png';
      document.getElementById('s5').src = 'Imagens/star0.png';
      avaliacao = 'Não avaliado';
    }
  }

  document.getElementById('rating').innerHTML = avaliacao;
}
