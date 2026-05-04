import * as combine from './combine.js';

const numero1Input = document.getElementById('numero1');
const numero2Input = document.getElementById('numero2');
const operacionSelect = document.getElementById('operacion');
const btncalcular = document.getElementById('btncalcular');
const resultadosDiv = document.getElementById('resultados');

function calcular() {
    try {
        const operacion = operacionSelect.value;
        const num1 = parseFloat(numero1Input.value);
        const num2 = parseFloat(numero2Input.value);

        let resultado;

        switch (operacion) {
            case 'ejercicio20':
                resultado = combine.ejer.ejercicio20(numero1Input.value);
                break;

            case 'ejercicio21':
                // Ejemplo con matriz quemada según tu código original
                resultado = combine.ejer.ejercicio21([[1, 2], [3, 4]]);
                break;

            case 'ejercicio22':
                resultado = combine.ejer.ejercicio22(num1, num2);
                break;

            case 'ejercicio23':
                // Ejemplo con arreglos quemados según tu código original
                resultado = combine.ejer.ejercicio23([1, 2, 3], [4, 5]);
                break;

            case 'ejercicio24':
                resultado = combine.ejer.ejercicio24([1, 3, 5, 7, 9], num1);
                break;

            case 'ejercicio25':
                resultado = combine.ejer.ejercicio25([1, 2, 3, 4], num1);
                break;

            default:
                throw new Error('Operación no válida o fuera del rango 20-25');
        }

        if (resultado !== undefined) {
            mostrarResultado(`📌 Resultado: ${JSON.stringify(resultado)}`);
        }

    } catch (error) {
        mostrarResultado(`❌ Error: ${error.message}`, 'error');
    }
}

function mostrarResultado(mensaje, tipo = 'success') {
    resultadosDiv.textContent = mensaje;
    resultadosDiv.className = `result ${tipo}`;
}

btncalcular.addEventListener('click', calcular);