
function extrairRaiz(objNumero, objParagrafo)
{
    //acessando o valor do número digitado no formulario
    
    let numero = objNumero.value;
    let raiz = Math.sqrt(numero);

    //fazendo o JS mostra o valor da raiz dentro do parafrago na pagina web

    objParagrafo.innerHTML = raiz;

    //aqui, o paragrafo está invisível. Fazemos o JS torná-lo inserindo a classe mostra no parágrafo

    objParagrafo.setAttribute("class", "mostra");
}






//criando os objetos que representam elementos do documento web, os quais devem ser manipulados pelo JS

let objNumero = document.getElementById("numero");
let objBotao1 = document.getElementById("botao1");
let objBotao2 = document.getElementById("botao2");
let objParagrafo = document.getElementById("mostrar-raiz");

//associando os eventos aos objetos criados acima

objBotao1.addEventListener("click", function()
                            {
                                extrairRaiz(objNumero,objParagrafo)
                            });

objBotao2.addEventListener("click", function()
                            {
                                mostrarEsconder(objParagrafo)
                            });
