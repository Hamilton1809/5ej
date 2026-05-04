


// ------------------- EJERCICIOS 20–25 -------------------

const ejercicio20 = (texto) => {
    let vocales = "aeiouAEIOU";
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }

    return contador;
};

const ejercicio21 = (matriz = [
    [1,2],
    [3,4]
]) => {
    let resultado = [];

    for (let i = 0; i < matriz[0].length; i++) {
        let fila = [];

        for (let j = 0; j < matriz.length; j++) {
            fila.push(matriz[j][i]);
        }

        resultado.push(fila);
    }

    return resultado;
};

const ejercicio22 = (a, b) => {
    let suma = a + b;
    let resta = a - b;
    let multiplicacion = a * b;
    let division = a / b;

    return [suma, resta, multiplicacion, division];
};

const ejercicio23 = (a = [1,2,3], b = [4,5]) => {
    let salida = [];

    for (let i = 0; i < a.length + b.length - 1; i++) {
        let suma = 0;

        for (let j = 0; j < a.length; j++) {
            if (i - j >= 0 && i - j < b.length) {
                suma += a[j] * b[i - j];
            }
        }

        salida.push(suma);
    }

    return salida;
};

const ejercicio24 = (arr, valor) => {

    let inicio = 0;
    let fin = arr.length - 1;

    while (inicio <= fin) {

        let medio = Math.floor((inicio + fin) / 2);

        if (arr[medio] === valor) return medio;

        if (arr[medio] < valor) {
            inicio = medio + 1;
        } else {
            fin = medio - 1;
        }
    }

    return -1;
};

const ejercicio25 = (arr, posiciones) => {

    let resultado = [];
    let k = Math.abs(posiciones) % arr.length;

    for (let i = 0; i < arr.length; i++) {
        let nuevoIndex = (i + k) % arr.length;
        resultado[nuevoIndex] = arr[i];
    }

    return resultado;
};

// ------------------- EXPORT -------------------

export { 

ejercicio20,
ejercicio21,
ejercicio22,
ejercicio23,
ejercicio24,
ejercicio25

};