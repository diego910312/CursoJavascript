const h1 = document.querySelector('h1'); 
const input1 = document.querySelector('#calculo1'); 
const input2 = document.querySelector('#calculo2'); 
const btn = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultado');

btn.addEventListener('click',btnOnClick); 

function btnOnClick(){
    const sumaInputs = (parseInt(input1.value) + parseInt(input2.value)); 
    pResultado.innerText = "el resultado es: " + sumaInputs;  
}