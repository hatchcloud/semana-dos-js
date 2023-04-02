
// Get the form and result elements
const form = document.querySelector('#form-num');
const resultContainer = document.querySelector('#result-container');
const resultElement = document.querySelector('#result');

form.addEventListener('submit', (event) => {
event.preventDefault();
const numValue = document.querySelector('#num-input').value;

const numeroIngresado = parseFloat(numValue);
    if(isNaN(numeroIngresado)){
        resultElement.textContent = `Escriba un valor númerico`;
        resultContainer.classList.remove('hidden');
    }else{
        // if it is not a number
        const message = validarNumero(numeroIngresado);
        // Show the result container and update the result element
        resultElement.textContent = message;
        resultContainer.classList.remove('hidden');
    }
});

//Cree un script que lea un número, determine si el número es impar menor a 10, si es par menor a
//10 o si es igual a 10. y el promedio de números mayores a 10

const validarNumero = (num) =>{
    let message
    if(num < 10 ){
        if (num % 2 === 0) {
            message = `El número ${num} es par y menor a 10.`;
        } else {
            message = `El número ${num} es impar y menor a 10`;
        }
    }else if (num === 10) {
        message ="El número es 10";
    }else{
        message = `El número ${num} es mayor a 10`;
    }
    return message
}