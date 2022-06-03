let counter1 = 1;
let counter2 =1;
const plus =document.querySelectorAll('.plus');
const minus =document.querySelectorAll('.minus');
const value =document.querySelector('.value1');
const valuee =document.querySelector('.value2');


plus[0].addEventListener('click',()=> {
    plus[0].querySelectorAll('.plus');
    value.innerHTML =++counter1;
})
minus[0].addEventListener('click',()=> {
    minus[0].querySelectorAll('.plus');
    value.innerHTML =--counter1;
})
plus[1].addEventListener('click',()=> {
    plus[1].querySelectorAll('.plus');
    valuee.innerHTML =++counter2;
})
minus[1].addEventListener('click',()=> {
    minus[1].querySelectorAll('.plus');
    valuee.innerHTML =--counter2;
})



