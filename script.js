
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})


menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

/* Formulário de Contato via WhatsApp */

function enviarwhats(event){
    event.preventDefault();

const nome = document.getElementById('nome').value;
const mensagem = document.getElementById('mensagem').value;
const telefone = '5565996961459'; 

const texto = `Olá!, Me chamo ${nome}, ${mensagem}`;
const msgformatada = encodeURIComponent(texto);

const url = `https://wa.me/${telefone}?text=${msgformatada}`;

window.open(url, '_blank');
}