
const jogadoresMasculinos = jogadores.filter(jogador => jogador.elenco === 'masculino');


const jogadorasFemininas = jogadores.filter(jogador => jogador.elenco === 'feminino');


const manipula_click = (evento) => {
  const clicada = evento.target;
  sessionStorage.setItem('elenco', clicada.dataset.elenco);
  sessionStorage.setItem('nome', clicada.dataset.nome);
  sessionStorage.setItem('posicao', clicada.dataset.posicao);
  sessionStorage.setItem('descricao', clicada.dataset.descricao);
  sessionStorage.setItem('nomecomp', clicada.dataset.nomecomp);
  sessionStorage.setItem('nascimento', clicada.dataset.nascimento);
  sessionStorage.setItem('altura', clicada.dataset.altura);
  sessionStorage.setItem('imagem', clicada.src);

  window.location.href = 'detalhes.html';
}


function criarCard(e) {
 
  const card = document.createElement('div');
 
  card.classList.add('card');

  
  const imagem = document.createElement('img');
  imagem.src = e.imagem;
  imagem.alt = e.nome;
  imagem.classList.add('card-img');


  imagem.onclick = manipula_click;
  imagem.dataset.elenco = e.elenco;
  imagem.dataset.nome = e.nome;
  imagem.dataset.posicao = e.posicao
  imagem.dataset.descricao = e.descricao;
  imagem.dataset.nomecomp = e.nome_completo;
  imagem.dataset.nascimento = e.nascimento;
  imagem.dataset.altura = e.altura;

 
  const nome = document.createElement('h3');
  nome.textContent = e.nome;
  nome.classList.add('card-title');

 
  const posicao = document.createElement('h3');
  posicao.textContent = e.posicao;
  posicao.classList.add('card-posicao');

  card.appendChild(imagem);
  card.appendChild(nome);
  card.appendChild(posicao);
  
  return card;
}


const cardsContainerFeminino = document.getElementById('cards-container-feminino');


const cardsContainerMasculino = document.getElementById('cards-container-masculino');


jogadorasFemininas.forEach(function(e) {
    const card = criarCard(e);
    cardsContainerFeminino.appendChild(card);
  });


jogadoresMasculinos.forEach(function(e) {
  const card = criarCard(e);
  cardsContainerMasculino.appendChild(card);
});

