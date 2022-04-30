/*
    arquivo para interagir com elementos do arquivo menu.html
*/

var categoria = window.document.getElementById('categoria');
var creditos = window.document.getElementById('creditos');
var sair = window.document.getElementById('sair');

//lista de eventos para os botões CATEGORIA, CRÉDITOS e SAIR
categoria.addEventListener('mouseenter', categoriaDentro);
categoria.addEventListener('mouseout', categoriaFora);
creditos.addEventListener('mouseenter', creditosDentro);
creditos.addEventListener('mouseout', creditosFora);
sair.addEventListener('mouseenter', sairDentro);
sair.addEventListener('mouseout', sairFora);

//funções para mudar cor dos botões
function categoriaDentro(){
    categoria.style.background = '#00FFFF';
}
function creditosDentro(){
    creditos.style.background = '#ADFF2F';
}
function sairDentro(){
    sair.style.background = '#fa1d1d';
}
function categoriaFora(){
    categoria.style.background ='#D3D3D3';
}
function creditosFora(){
    creditos.style.background = '#D3D3D3';
}
function sairFora(){
    sair.style.background = '#D3D3D3';
}