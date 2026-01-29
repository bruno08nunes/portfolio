export const projects = [
    {
        name: "Minerva",
        description:
            "Aplicação para ensino de lógica e programação de maneira gamificada, com um sistema de lições, progresso de usuário e desafios interativos.",
        tools: ["TypeScript", "Next.js", "Tailwind", "Prisma", "Express"],
        text: [
            "Esta aplicação tem como objetivo auxiliar jovens no aprendizado de lógica e programação por meio de gamificação. Ela oferece explicações claras e desafios práticos sobre os conceitos fundamentais da programação.",
            "A plataforma conta com autenticação de usuários, criptografia de senhas, arquitetura limpa com inversão de dependências, testes automatizados e a possibilidade de uso mesmo sem a necessidade de cadastro.",
            "O frontend foi desenvolvido em TypeScript para reduzir erros em tempo de desenvolvimento; Next.js, aproveitando componentes, sistema de rotas e cache; e Tailwind CSS para facilitar a criação de interfaces responsivas.",
            "O backend também utiliza TypeScript, com Express para simplificar a comunicação entre frontend e backend, e Prisma ORM para um gerenciamento mais eficiente e seguro do banco de dados."
        ],
        links: [
            {
                href: "https://github.com/bruno08nunes/minerva-frontend",
                title: "Frontend Github",
            },
            {
                href: "https://github.com/bruno08nunes/minerva-backend",
                title: "Backend Github",
            },
        ],
    },
    {
        name: "Loja-Loja",
        description:
            "Loja virtual com catálogo de produtos e autenticação salvos no banco de dados e  um carrinho de compras salvo no computador do usuário.",
        tools: ["HTML/CSS", "JavaScript", "MySQL", "Express"],
        text: [
            "Esta é uma loja online com produtos fictícios que oferece sistema de autenticação, geração de PDF no momento da compra e um carrinho de compras persistido localmente no dispositivo do usuário.",
            "O frontend foi desenvolvido com HTML para a estruturação da aplicação, CSS para a estilização visual e JavaScript para implementar interações e comportamentos dinâmicos.",
            "O backend foi implementado em JavaScript utilizando Express para a comunicação entre cliente e servidor, além de um banco de dados relacional MySQL gerenciado com a biblioteca mysql2."
        ],
        links: [
            {
                href: "https://github.com/bruno08nunes/loja-loja",
                title: "Github",
            },
        ],
    },
    {
        name: "Pokemon",
        description:
            "Jogo no qual o usuário precisa adivinhar qual Pokémon é pela sua silhueta.",
        tools: ["HTML/CSS", "JavaScript", "Poke API"],
        text: [
            "Esta aplicação é um jogo inspirado no clássio \"Quem é esse pokemon?\", no qual apenas a silhueta de um pokemon é exibida para que o jogador tente adivinhar qual é.",
            "O frontend foi desenvolvido utilizando HTML, CSS e JavaScript puros. A API pública PokeAPI foi utilizada para fornecer os nomes e imagens dos pokemons, que foram transformados em silhuetas pela propriedade brightness do CSS."
        ],
        links: [
            {
                href: "https://github.com/bruno08nunes/pokemon",
                title: "Github",
            },
        ],
    },
];