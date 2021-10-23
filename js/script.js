window.addEventListener('scroll',(e)=>{
    let menu = document.querySelector('#header');
    if(window.pageYOffset>0){
      menu.classList.add("header-shadow");
    }else{
      menu.classList.remove("header-shadow");
    }
  });
  
//Menu header
document.querySelector('#linkMenuBurguer').addEventListener('click',(e)=>{
    document.querySelector('#menu').classList.add('show-menu');
});
document.querySelector('#closeMenu').addEventListener('click',(e)=>{
    document.querySelector('#menu').classList.remove('show-menu');
});
document.querySelector('#showListHour').addEventListener('click',(e)=>{
    document.querySelector('#listHours').classList.toggle('show-list-hours');
        if(document.querySelector('#listHours').classList.contains('show-list-hours')){
            document.querySelector('#todayHour').style.display = 'none';
            document.querySelector('#showListHour img').src = './img/up-arrow.png';
        }
        else{
            document.querySelector('#todayHour').style.display = 'block';
            document.querySelector('#showListHour img').src = './img/down-arrow.png'
        }
})

const linksHours = document.querySelectorAll('#listHours li a');
for(let i =0; i < linksHours.length;i++){
    linksHours[i].addEventListener('click', (e)=>{
        e.defaultPrevented;
    })
}
//Conctact Us
const inputs = document.querySelectorAll('#inputNameForm, #inputEmailForm');

for(let i= 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup',(e)=>{
        let input = e.target;
        let parent = input.closest('div');
        //console.log('INPUT LENGTH: ', input.value.length);
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