import * as combine from './combine.js';

// 🔹 Esperar a que cargue el HTML
document.addEventListener('DOMContentLoaded', () => {

    const numero1Input = document.getElementById('numero1');
    const numero2Input = document.getElementById('numero2');
    const operacionSelect = document.getElementById('operacion');

    const btncalcular = document.getElementById('btncalcular');
    const btntesting = document.getElementById('btntesting');
    const resultadosDiv = document.getElementById('resultados');
    const extraInputsDiv = document.getElementById('extraInputs'); // 👈 NUEVO

    // --- CONFIGURACIÓN DE PRUEBAS (CORREGIDAS) ---
    const casosDePrueba = {
        'ejercicio20': { esperado: 0 },
        'ejercicio21': { esperado: [[1,3],[2,4]] },
        'ejercicio22': { esperado: [15, 5, 50, 2] },
        'ejercicio23': { esperado: [4, 13, 22, 15] },
        'ejercicio24': { esperado: 1 },
        'ejercicio25': { esperado: [4,1,2,3] }
    };

    // 🔹 MOSTRAR INPUTS DINÁMICOS
    operacionSelect.addEventListener('change', mostrarInputsDinamicos);

    function mostrarInputsDinamicos() {
        const op = operacionSelect.value;
        extraInputsDiv.innerHTML = "";

        if (op === "ejercicio21") {
            extraInputsDiv.innerHTML = `
                <p>Matriz (ej: 1,2;3,4)</p>
                <input type="text" id="matrizInput" value="1,2;3,4">
            `;
        }

        if (op === "ejercicio23") {
            extraInputsDiv.innerHTML = `
                <p>Array A (ej: 1,2,3)</p>
                <input type="text" id="arrayA" value="1,2,3">

                <p>Array B (ej: 4,5)</p>
                <input type="text" id="arrayB" value="4,5">
            `;
        }
    }

    // 🔹 FUNCIÓN QUE SOLO EJECUTA EL EJERCICIO
    function ejecutarEjercicio() {
        const operacion = operacionSelect.value;
        const num1 = parseFloat(numero1Input.value);
        const num2 = parseFloat(numero2Input.value);

        let resultado;

        switch (operacion) {
            case 'ejercicio20':
                resultado = combine.ejer.ejercicio20(numero1Input.value);
                break;

            case 'ejercicio21':
                const matrizTexto = document.getElementById('matrizInput').value;
                const matriz = matrizTexto.split(';').map(fila =>
                    fila.split(',').map(num => Number(num))
                );
                resultado = combine.ejer.ejercicio21(matriz);
                break;

            case 'ejercicio22':
                resultado = combine.ejer.ejercicio22(num1, num2);
                break;

            case 'ejercicio23':
                const arrayATexto = document.getElementById('arrayA').value;
                const arrayBTexto = document.getElementById('arrayB').value;

                const arrayA = arrayATexto.split(',').map(num => Number(num));
                const arrayB = arrayBTexto.split(',').map(num => Number(num));

                resultado = combine.ejer.ejercicio23(arrayA, arrayB);
                break;

            case 'ejercicio24':
                resultado = combine.ejer.ejercicio24([1, 3, 5, 7, 9], num1);
                break;

            case 'ejercicio25':
                resultado = combine.ejer.ejercicio25([1, 2, 3, 4], num1);
                break;

            default:
                throw new Error('Operación no válida');
        }

        return resultado;
    }

    // 🔹 BOTÓN CALCULAR
    function calcular() {
        try {
            const resultado = ejecutarEjercicio();
            mostrarResultado(`Resultado: ${JSON.stringify(resultado)}`, 'success');
        } catch (error) {
            mostrarResultado(`ERROR: ${error.message}`, 'error');
        }
    }

    // 🔹 BOTÓN TESTING
    function testing() {
        try {
            const operacion = operacionSelect.value;
            const resultado = ejecutarEjercicio();

            const esperado = casosDePrueba[operacion].esperado;

            const esCorrecto = JSON.stringify(resultado) === JSON.stringify(esperado);

            if (esCorrecto) {
                mostrarResultado(`✅ APROBADO | Resultado: ${JSON.stringify(resultado)}`, 'success');
            } else {
                mostrarResultado(`❌ DESAPROBADO | Obtuviste: ${JSON.stringify(resultado)} pero se esperaba: ${JSON.stringify(esperado)}`, 'warning');
            }

        } catch (error) {
            mostrarResultado(`⚠️ ERROR: ${error.message}`, 'error');
        }
    }

    // 🔹 MOSTRAR RESULTADO
    function mostrarResultado(mensaje, tipo) {
        resultadosDiv.textContent = mensaje;

        if (tipo === 'success') resultadosDiv.style.color = "green";
        if (tipo === 'warning') resultadosDiv.style.color = "orange";
        if (tipo === 'error') resultadosDiv.style.color = "red";
    }

    // 🔹 EVENTOS
    btncalcular.addEventListener('click', calcular);
    btntesting.addEventListener('click', testing);

});