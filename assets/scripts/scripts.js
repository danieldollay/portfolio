const palavras = ["HTML", "CSS", "JavaScript", "PHP", "Wordpress", "React"];

// Função para digitar uma palavra lentamente
function digitarPalavra(palavra, index, velocidade) {
  if (index < palavra.length) {
    const divHabilidade = document.querySelector('#sobre-mim .habilidade');
    divHabilidade.textContent += palavra.charAt(index);
    index++;
    setTimeout(() => digitarPalavra(palavra, index, velocidade), velocidade);
  } else {
    setTimeout(() => apagarPalavra(velocidade), 1000);
  }
}

// Função para apagar a palavra lentamente
function apagarPalavra(velocidade) {
  const divHabilidade = document.querySelector('#sobre-mim .habilidade');
  const palavraAtual = divHabilidade.textContent;
  if (palavraAtual.length > 0) {
    divHabilidade.textContent = palavraAtual.slice(0, -1);
    setTimeout(() => apagarPalavra(velocidade), velocidade);
  } else {
    // Quando a palavra atual for apagada, chama a próxima palavra
    setTimeout(() => proximaPalavra(), 1000);
  }
}

// Função para avançar para a próxima palavra
function proximaPalavra() {
  const divHabilidade = document.querySelector('#sobre-mim .habilidade');
  divHabilidade.textContent = ''; // Limpa a div
  const proximaIndex = (palavras.indexOf(divHabilidade.dataset.palavra) + 1) % palavras.length;
  divHabilidade.dataset.palavra = palavras[proximaIndex];
  digitarPalavra(palavras[proximaIndex], 0, 100);
}

// Inicia o processo com a primeira palavra
document.querySelector('#sobre-mim .habilidade').dataset.palavra = palavras[0];
digitarPalavra(palavras[0], 0, 100);

window.addEventListener('scroll', function () {
  var menu = document.getElementById('menu');
  var menuAltura = menu.offsetHeight;
  var posicaoScroll = window.scrollY;
  const botao = document.querySelector('.btn-top');
  const capturarScroll = document.body.scrollTop || document.documentElement.scrollTop;

  if (capturarScroll > 20) {
    botao.classList.add('topo');
  } else {
    botao.classList.remove('topo');
  }


  if (posicaoScroll >= menuAltura) {
    menu.classList.add('menu-fixo');
  } else {
    menu.classList.remove('menu-fixo');
  }
});


// Menu Mobile
function AbrirMenu() {

  const container = document.querySelector('#menu .box-menu');
  const body = document.querySelector('body');
  const hamburger = document.querySelectorAll('#menu .menu-hamburger .hamburger');

  container.classList.toggle('aberto');
  body.classList.toggle('trava-scroll');

  hamburger.forEach(listra => {
    listra.classList.toggle('girar');
  });

}

const links = document.querySelectorAll("#menu ul li a");
links.forEach(function(link) {
    link.addEventListener("click", function() {
        const container = document.querySelector('#menu .box-menu');
        container.classList.remove('aberto');
        const body = document.querySelector('body');
        body.classList.remove('trava-scroll');
        const hamburgers = document.querySelectorAll('#menu .menu-hamburger .hamburger');
        hamburgers.forEach(hamburger => {
            hamburger.classList.remove('girar');
        });
    });
});


// Botão para rolar para o topo
function ScrollTopo() {

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Virar card

function virarCard(button) {
  var card = button.closest('.card').querySelector('.conteudo');
  card.classList.toggle('virar');
}

function voltarCard(button) {
  var card = button.closest('.card').querySelector('.conteudo');
  card.classList.remove('virar');
}