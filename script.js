const informacoes = [
  {
    titulo: "Sobre o projeto",
    texto:
      "Nossa empresa durante esse começo de ano está tirando do papel a ideia do nosso site. Ainda faltam alguns ajustes, porém todos estamos trabalhando para isso.",
  },

  {
    titulo: "Primeiro registro",
    texto:
      "Neste bimestre fizemos o primeiro registro do nosso projeto e seguimos evoluindo cada vez mais.",
  },

  {
    titulo: "Nosso outro site",
    texto:
      "Neste outro site você pode registrar jogos. Por enquanto ele ainda está cheio de defeitos, porém futuramente será algo bem maior e muito mais completo.",
  },
];

const cards = document.getElementById("cards");

informacoes.forEach((info) => {
  cards.innerHTML += `
    
        <div class="card">
        
            <h2>${info.titulo}</h2>

            <p>${info.texto}</p>

        </div>

    `;
});
