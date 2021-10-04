document.querySelector('#linkMenuBurguer').addEventListener('click',(e)=>{
    document.querySelector('#menu').classList.add('show-menu');
});
document.querySelector('#closeMenu').addEventListener('click',(e)=>{
    document.querySelector('#menu').classList.remove('show-menu');
});