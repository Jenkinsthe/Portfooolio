
const bt1 = document.getElementById("equal");
const main = document.querySelector('.Main')
const about = document.querySelector('.about')
const contacts = document.querySelector('.contacts')
const homenav = document.querySelector('#homenav')
const aboutnav = document.querySelector('#aboutnav')
const contactsnav = document.querySelector('#contactsnav')

var num1;
var num2;
let total;
main.style.display = "block";


console.log(main.style.display);
bt1.addEventListener("click",function(){
  
  num1= parseInt(document.getElementById("num1").value);
  num2= parseInt(document.getElementById("num2").value);
  total= num1 + num2;
  document.getElementById('total').innerText = total;
  console.log (total)
});


homenav.addEventListener("click", function(){

  console.log('click');
  main.style.display= "block";
  about.style.display='none';
  contacts.style.display='none';
  document.body.style.backgroundImage = "url('A.png')"




});

aboutnav.addEventListener("click", function(){

  console.log('click');
  main.style.display= "none";
  about.style.display='block';
  contacts.style.display='none';
  document.body.style.backgroundImage = "url('B.jpg')"



});
contactsnav.addEventListener("click", function(){

  console.log('click');
  main.style.display= "none";
  about.style.display='none';
  contacts.style.display='block';
  document.body.style.backgroundImage = "url('C.jpg')"



});
window.addEventListener('load', (event) => {
    console.log('click');
  main.style.display= "block";
  about.style.display='none';
  contacts.style.display='none';

});