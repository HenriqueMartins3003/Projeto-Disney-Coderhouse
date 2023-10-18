const personagens = [
    {
        nome: "Nemo", 
        ano: "2003",
        genero: "Masculino",
        filme: "Procurando Nemo", 
        descricao: "A história se passa em um mundo onde um peixe-palhaço superprotetor chamado Marlin, junto com uma cirurgiã-patela chamada Dory, procura por seu filho desaparecido, Nemo. Ao longo do caminho, Marlin aprende a correr riscos e aceita que Nemo tem condições de cuidar de si mesmo.",
        sobre: "Nemo é colocado num aquário no consultório de um dentista e lá encontra uma turma de animais marinhos, liderada por Guelra, um moorish idol. Nemo descobre que será dado à sobrinha do dentista, Darla, matadora de peixes. Guelra tem um plano de fuga: obstruir o filtro do aquário, para que o dentista precise limpar o recipiente e os transfira para sacos plásticos, para que assim eles se atirem pela janela e caiam no porto-seguro. Nemo tenta bloquear o filtro com um seixo, mas o plano não dá certo.",
        imagem: "../imagens/nemo.jpg"
    },
    {
        nome: "Ariel", 
        ano: "1989",
        genero: "Feminino",
        filme: "A Pequena Sereia",
        descricao: "A Pequena Sereia conta a história de uma linda princesa sereia que sonha em se tornar humana.",
        sobre: "Ariel é uma sereia de dezesseis anos de idade que está insatisfeita com a vida no mar e curiosa sobre como é o mundo humano. Com seu melhor amigo Linguado, Ariel recolhe artefatos humanos e vai para a superfície do oceano para visitar Sabidão, uma gaivota, que oferece conhecimento muito impreciso da cultura humana.",
        imagem: "../imagens/disney classicos.png"
    },
    {
        nome: "Woody", 
        ano: "1995",
        genero: "Masculino",
        filme: "Toy Story",
        descricao: "O aniversário de Andy está chegando e os brinquedos estão nervosos. Afinal de contas, eles temem que um novo brinquedo possa substituí-los.",
        sobre: "Woody é considerado o líder dos brinquedos do quarto de Andy, entre os quais estão Slinky, um cão com molas; Porquinho, o porco-cofrinho; Sr. Cabeça de Batata, o clássico brinquedo montável da Hasbro; Rex, o tiranossauro de plástico; Betty, a pastora de ovelhas e namorada de Woody, entre outros.",
        imagem: "../imagens/pixar.png"
    },
    {
        nome: "Homem Aranha", 
        ano: "1962",
        genero: "Masculino",
        filme: "Homem Aranha",
        descricao: "A história do Homem-Aranha começa quando o tímido Peter Parker, órfão de pai e mãe, que vive com os tios (Ben e May) em Forest Hills, no bairro nova-iorquino de Queens (EUA), visita um laboratório onde decorre uma experiência que revolucionará a sua vida, durante a qual uma aranha é atingida por uma potente radiação.",
        sobre: "O Homem-Aranha, o alter ego de Peter Parker, é um super-herói que aparece nas revistas em quadrinhos publicadas pela Marvel Comics.",
        imagem: "../imagens/marvel.png"
    },
    {
        nome: "Darth Vader", 
        ano: "1999",
        genero: "Masculino",
        filme: "Star Wars",
        descricao: "Darth Vader aparece pela primeira vez em Star Wars como um implacável ciborgue Sith, servindo ao Império Galáctico. Ele é encarregado, junto de Grand Moff Tarkin, de recuperar os planos secretos da estação de batalha Estrela da Morte, que foram roubados pela Aliança Rebelde.",
        sobre: "Darth Vader é um personagem fictício da franquia Star Wars. O personagem é o antagonista central da trilogia original",
        imagem: "../imagens/star wars.png"
    }
]

function exibePersonagens(id){
    const personagem = personagens[id]

    const apresentacao = `
    <article>
        <h2>APRESENTAÇÃO</h2>
        <p> 
            Nome: ${personagem.nome}<br/>
            Ano: ${personagem.ano}<br/>
            Gênero: ${personagem.genero}<br/>
            Filme: ${personagem.filme}<br/>
            Descrição: ${personagem.descricao}
        </p>
    </article>`
    
    const elementApresentacao = document.getElementById("apresentacao");
    elementApresentacao.innerHTML = apresentacao;

    const image = `<img class="image-nemo" src="${personagem.imagem}" alt="nemo" />`
    console.log(image)
    const elementImagem = document.getElementById("image");
    elementImagem.innerHTML = image;

    const sobre = `
    <article>
        <h5>SOBRE O PERSONAGEM</h5>
        <p>${personagem.sobre}</p>
    </article>`

    const elementSobre = document.getElementById("sobre");
    elementSobre.innerHTML = sobre;
}

exibePersonagens(0)