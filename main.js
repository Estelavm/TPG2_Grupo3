// 1. Contar vocales en una cadena

// 2. Muestra el mayor número de un array

// 3: Calcular la media de un array de números
function calcularMedia(numeros) {
    return numeros.reduce(function (a, b) {
        return a + b;
    }, 0) / numeros.length;
}

// Ejemplos:
console.log("Solución 3:");
console.log("calcularMedia([1, 2, 3, 4, 5]) ===> " + calcularMedia([1, 2, 3, 4, 5])); // 3
console.log("calcularMedia([3, 9, 12, 16]) ===> " + calcularMedia([3, 9, 12, 16])); // 10
console.log("calcularMedia([5, 20, 25, 50]) ===> " + calcularMedia([5, 20, 25, 50])); // 25
console.log("///////////////");

/*
Para calcular la media de un array, primero sumé todos los elementos utilizando reduce(),
que permite iterar sobre el array acumulando un resultado. Luego dividí el total entre
la cantidad de elementos del array con length.
*/

// 4: Invertir los elementos de un array
function invertirArray(array) {
    return array.reverse();
}

// Ejemplos:
console.log("Solución 4:");
console.log(invertirArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(invertirArray(["a", "b", "c", "d"])); // ["d", "c", "b", "a"]
console.log(invertirArray([10, 20, 30, 40])); // [40, 30, 20, 10]
console.log("///////////////");

/*
Para invertir un array, utilicé el método reverse(), que modifica el array original 
para cambiar el orden de sus elementos.
*/

// 5. Eliminar elementos duplicados de un array
function eliminarDuplicados(array) {
    let arraySinDuplicados = [];
    for (let i = 0; i < array.length; i++) {
        if (!arraySinDuplicados.includes(array[i])) { 
            arraySinDuplicados.push(array[i]); 
        }
    }
    console.log("Solucion 5:");
    console.log(arraySinDuplicados); 
    console.log("///////////////");
    return arraySinDuplicados;
}

console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(eliminarDuplicados([100, 200, 200, 30]));      // [100, 200, 30]
console.log(eliminarDuplicados([15, 15, 20, 20])); // [15, 20]
/*Para eliminar los duplicados, utilicé un array vacío (arraySinDuplicados) donde voy agregando los elementos solo si no están ya presentes. 
Dentro del condicional, usé el método includes para verificar si el elemento ya se encontraba en el nuevo array.
Sino está, se lo agrega al array con el método push.
Finalmente, retornamos el array sin elementos repetidos*/

// 6. Convertir la primera letra de cada palabra en mayúscula
function capitalizarPalabras(cadena) {
    let palabras = cadena.split(" "); 
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].slice(1); 
    }
    let resultado = palabras.join(" "); 
    console.log("Solucion 6:");
    console.log(resultado); 
    console.log("///////////////");
    return resultado;
}

console.log(capitalizarPalabras("hola mundo desde javascript")); // "Hola Mundo Desde Javascript"
console.log(capitalizarPalabras("estoy aprendiendo javascript")); // "Estoy Aprendiendo Javascript"
console.log(capitalizarPalabras("me gusta el mate"));      // "Me Gusta El Mate"
/*Para este ejercicio, primero dividí la cadena en un array de palabras usando split. 
Luego, recorrí cada palabra, usando el bucle for, y convertí la primera letra de cada una a mayúscula. 
Con slice. Devolví el resto de la palabra desde el segundo carácter en adelante, sin modificarlo.
Finalmente, volví a unir las palabras con join.*/

// 7. Generar los primeros N números de la sucesión de Fibonacci
function fibonacci(n) {
    let resultado = [0, 1]; 
    for (let i = 2; i < n; i++) {
        resultado.push(resultado[i - 1] + resultado[i - 2]); 
    }
    console.log("Solucion 7:");
    console.log(resultado.slice(0, n)); 
    console.log("///////////////");
    return resultado.slice(0, n);
}

console.log(fibonacci(5));  // [0, 1, 1, 2, 3]
console.log(fibonacci(9));  // [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacci(11));  // [0, 1, 1]
/*Para generar la sucesión de Fibonacci, empecé con los dos primeros números [0, 1], luego fui sumando los dos números anteriores para obtener el siguiente número. 
Utilicé slice para devolver los primeros números de la secuencia que sean solicitados.*/
