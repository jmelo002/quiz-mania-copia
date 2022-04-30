/*
    arquivo para interagir com elementos do arquivo questoes.html
*/

var alt1 = window.document.getElementById('alt1');
var alt2 = window.document.getElementById('alt2');
var alt3 = window.document.getElementById('alt3');
var alt4 = window.document.getElementById('alt4');

//ouvidores para mudar a cor do fundo do botão quando o mouse estiver dentro do botão
alt1.addEventListener('mouseenter', cordentro1);
alt2.addEventListener('mouseenter', cordentro2);
alt3.addEventListener('mouseenter', cordentro3);
alt4.addEventListener('mouseenter', cordentro4);

//ouvidores para mudar a cor do fundo do botão quando o mouse estiver fora do botão
alt1.addEventListener('mouseout', corfora1);
alt2.addEventListener('mouseout', corfora2);
alt3.addEventListener('mouseout', corfora3);
alt4.addEventListener('mouseout', corfora4);

//funções que mudando a cor do fundo do botão quando estão dentro e fora

function cordentro1(){
    alt1.style.background = '#DC143C';
}

function cordentro2(){
    alt2.style.background = '#DC143C';
}

function cordentro3(){
    alt3.style.background = '#DC143C';
}

function cordentro4(){
    alt4.style.background = '#DC143C';
}

function corfora1(){
    alt1.style.background = '#8a2be2';
}

function corfora2(){
    alt2.style.background = '#8a2be2';
}

function corfora3(){
    alt3.style.background = '#8a2be2';
}

function corfora4(){
    alt4.style.background = '#8a2be2';
}
