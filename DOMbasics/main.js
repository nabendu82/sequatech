//Grab Single Element
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('h1'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('#my-form'));

//Grab Multiple Elements
const nodeItems = document.querySelectorAll('.item');
const colItems = document.getElementsByClassName('item');
// console.log(document.getElementsByTagName('li'));

// nodeItems.forEach(item => console.log(item));

// for(let i = 0; i < colItems.length; i++){
//     console.log(colItems[i]);
// }

//DOM manipulation
const ul = document.querySelector('.items');

// ul.remove();

// const btn = document.querySelector('.btn');
// btn.style.backgroundColor = 'red';
// btn.style.textTransform = 'uppercase';

//Event Listener
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', e => {
//     e.preventDefault();
//     ul.firstElementChild.textContent = 'HTML';
//     ul.children[1].innerText = 'CSS';
//     ul.lastElementChild.innerHTML = '<h1>JavaScript</h1>';
// })

//Form Manipulation
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerText = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
    }
}