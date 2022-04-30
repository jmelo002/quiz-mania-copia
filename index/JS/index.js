var mudacor = window.document.getElementById('iniciar');

mudacor.addEventListener('mouseenter', dentro);
mudacor.addEventListener('mouseout', fora);

function dentro(){
    mudacor.style.background = '#00FF00';
}
function fora(){
    mudacor.style.background ='#D3D3D3';
}