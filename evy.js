const btn = document.querySelector('#btn1');
/*
btn.addEventListener('click', () => {
  alert("Hello World");
});
*/
function asa(){
    alert("Hello");
}

const ten = () => alert("Bye");

const element = document.querySelector("#btn1");
element.addEventListener('click', (ef) => {
  ef.target.style.background = 'blue';
  // `event` is passed into the callback from the `.addEventListener` function when it receives a 'click' event.
});
