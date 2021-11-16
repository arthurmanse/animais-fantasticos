const div = document.querySelector('div')
const divCor = document.querySelector('[data-cor]')
// Seleciona o elemento com data-cor no DOM
const divAzul = document.querySelector('[data-cor="azul"]')
// Seleciona o elemento com data-cor="azul" no DON

console.log(div, divCor, divAzul)

/*
A seleção no CSS pode ser feita da seguinte maneira:

*   [data-cor^="azul"] {
*     background: blue;
*   }

Nesse exemplo, pegará todos os data-cor que começam com "azul", mesmo que seja "azul-bebê"
*/

div.dataset.height = 500;
// Adiciona um dataset "data-height=500" na div

delete div.dataset.height
// Deleta o dataset criado

// ----------------------------------------------------------

const divs = document.querySelectorAll('[data-cor]');
divs.forEach((div => {
  div.classList.add(div.dataset.cor)
}))
// Nesse exemplo, cria-se classes em todos os elementos que possuem dataset "data-cor" com nomes do valor dos datasets.
// data-cor="azul" class="azul"
// data-cor="verde" class="verde"


/*
<div data-anima="left" data-tempo="1000">Div 1</div>
<div class="anima-left tempo-1000">Div 2</div>
*/
/* A vantagem de se utilizar data attributes é que torna mais fácil evitarmos conflitos com estilos do CSS. Além de deixar a estrutura da tag mais organizada
*/


/* Por padrão o JavaScript não aceita - (traço) como caracter válido para nomear propriedades. Então qualquer traço será removido e a letra seguinte transformada em maiúscula. (camelCase)
*/

const diva = document.querySelector('[data-cor]');
//console.log(diva.dataset);
// {animaScroll: 'left'}
//diva.dataset.animaScroll; // left
//diva.dataset.tempoTotal = 1000;
// Na div vira data-tempo-total="1000"

delete diva.dataset.animaScroll; // remove o atributo
delete diva.dataset.tempoTotal;

// -----------------------------------------------------


// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.
