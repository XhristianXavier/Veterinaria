//Menu header
document.querySelector('#linkMenuBurguer').addEventListener('click',(e)=>{
    document.querySelector('#menu').classList.add('show-menu');
});
document.querySelector('#closeMenu').addEventListener('click',(e)=>{
    document.querySelector('#menu').classList.remove('show-menu');
});

//Conctact Us
const inputs = document.querySelectorAll('#inputNameForm, #inputEmailForm');

for(let i= 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup',(e)=>{
        let input = e.target;
        let parent = input.closest('div');
        //console.log('INPUT LENGTH: ', input.value.length);
        console.log('PARENT:', parent);
        let label  = parent.querySelector('label');
        if(input.value.length > 0){
            label.style.fontSize = '.8rem';
            label.style.top = '30%';  
        }
        else{
            label.style.fontSize = '';
            label.style.top = '';
        }
    });
}

//map
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);