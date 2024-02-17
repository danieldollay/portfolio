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

  if (posicaoScroll >= menuAltura) {
    menu.classList.add('menu-fixo');
  } else {
    menu.classList.remove('menu-fixo');
  }
});
