
// Get the form and result elements
const form = document.querySelector('#form-peso');
const resultContainer = document.querySelector('#result-container');
const resultElement = document.querySelector('#result');

form.addEventListener('submit', (event) => {
event.preventDefault();
const numValue = document.querySelector('#peso-input').value;

const numeroIngresado = parseFloat(numValue);
    if(isNaN(numeroIngresado)){
        resultElement.textContent = `Escriba un valor númerico`;
        resultContainer.classList.remove('hidden');
    }else{
        // if it is not a number
        const message = validarPeso(numeroIngresado);
        // Show the result container and update the result element
        resultElement.textContent = message;
        resultContainer.classList.remove('hidden');
    }
});

//Cree un script que lea el peso de un ave y determine: si pesa entre 0 y 2 kg. muestre el mensaje
//“Peso bajo”, si pesa entre 2.01 kg. y 2.75 kg. muestre el mensaje “Peso medio”, si pesa más de
//2.75 kg., muestre “Peso alto”.

const validarPeso = (peso) =>{
    let message
    if(peso >= 0 && peso <= 2){
        message  = `${peso} es un peso bajo`;
    }else if (peso > 2 && peso <= 2.75) {
        message  = `${peso} es un peso medio`;
    }else{
        message  = `${peso} es un peso alto`;
    }
    return message
}

