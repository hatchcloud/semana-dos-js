
const form = document.querySelector('#form-calular');
const resultContainer = document.querySelector('#result-container');
const resultElement = document.querySelector('#result');

form.addEventListener('submit', (event) => {
event.preventDefault();
const productValue = document.querySelector('#product-input').value;
const productAmount = document.querySelector('#product-amount').value;

const product = parseFloat(productValue);
const amount = parseFloat(productAmount);

    if(isNaN(product)){
        resultElement.textContent = `Escriba un valor númerico`;
        resultContainer.classList.remove('hidden');
    }else{
        const total = calcularPrecio(product, amount);
        resultElement.textContent = `Precio a pagar ₡${total.totalDescuento}. Total bruto: ₡${total.totalBruto}`;
        resultContainer.classList.remove('hidden');
    }
});

//Calular Descuento
//Una tienda de pantalones tiene en promoción sus productos. Por eso, se requiere realizar una
//disminución en el precio de los artículos que vende, según la siguiente tabla de precios:

let precioPantalon = 0;
let totalBruto     = 0;
let totalDescuento = 0;
let descuento

const calcularPrecio = (montoPantalon, cantidad = 1 )=>{
    totalBruto = montoPantalon * cantidad;
        if (totalBruto >= 10000  && totalBruto <= 20000) 
            descuento = 0.05;
        else if(totalBruto >= 20001  && totalBruto <= 30000) 
            descuento = 0.10;
        else if( totalBruto >= 30001)
            descuento = 0.15;
        else descuento = 0;
        totalDescuento = totalBruto - (totalBruto * descuento);
        const formattedTotalDescuento = totalDescuento.toLocaleString();
        const formattedTotalBruto = totalBruto.toLocaleString();
        return {
            totalDescuento: formattedTotalDescuento,
            totalBruto: formattedTotalDescuento,
        };
}

