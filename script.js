const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado:
     "TheStone foi convidado para ir na casa de seu amigo Eulampio",
    alternativas: [
        "Voce foi!",
        "Voce nao foi!"]
},
{
    enunciado: "TheStone nao concorda com a decisao dos amigos em abrir a caixa empoeirada",
    alternativas: [
        "Eles decidem nao abrir",
        "Eles fazem TheStone mudar de ideia "
    ]
},
{
    enunciado: "",
    alternativas: [
        "",
        ""
    ]
},
{
    enunciado: "",
    alternativas: [
        "",
        ""
    ]
},

    ];

    let atual = 0;
    let perguntaAtual;

    function mostraPerguntas() {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
    }