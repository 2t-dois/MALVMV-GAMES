const informacoes = [
  {
    titulo: "Sobre o projeto",
    texto:
      "Nossa empresa durante esse começo de ano está tirando do papel a ideia do nosso site. Ainda faltam alguns ajustes, porém todos estamos trabalhando para isso.",
  },

  {
    titulo: "Semana 8",
    texto:
      "Foi desenvolvida uma atividade prática voltada para testes de login em um sistema, utilizando casos de teste para validar o funcionamento correto da aplicação. Foram criados cenários de sucesso e erro, analisando login com dados válidos e senha incorreta. O trabalho também apresentou precondições, passos de execução e resultados esperados para cada situação. Além disso, foi destacada a importância de testar falhas para encontrar bugs e melhorar a segurança do sistema.",
  },

  {
    titulo: "Semana 9",
    texto:
      "Foi realizada uma análise da qualidade dos testes dos módulos do sistema, utilizando KPI-DF, taxa de sucesso e cobertura de requisitos. O estudo identificou que o módulo Login apresenta alto risco devido à grande quantidade de defeitos proporcionalmente ao código. Já o módulo Pagamento mostrou maior risco de falha por possuir baixa taxa de sucesso nos testes. Além disso, o módulo Relatórios apresentou falhas na cobertura de requisitos, necessitando melhorias nos testes realizados.",
  },

  {
    titulo: "Semana 10",
    texto:
      "O trabalho apresentou duas formas de lidar com mudanças em projetos: a abordagem de contrato rígido e a colaboração Ágil. Foram analisadas as respostas dadas ao cliente e os impactos de cada postura na equipe e no relacionamento com o cliente. Também foi destacado como a comunicação colaborativa reduz conflitos e melhora o trabalho em equipe. Por fim, concluiu-se que o principal objetivo de um projeto é entregar valor ao cliente.",
  },

  {
    titulo: "Nosso outro site",
    texto:
      "Neste outro site é uma Wikipedia de jogos, acompanhe o catálogo de jogos e toda semana terá 5 novos jogos nele!",
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
