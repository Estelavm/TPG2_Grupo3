// 1. Contar vocales en una cadena
// 2. Muestra el mayor número de un array
// 3. Calcular la media de un array de números
// 4. Invertir los elementos de un array

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
console.log(eliminarDuplicados([10, 20, 20, 30]));      // [10, 20, 30]
console.log(eliminarDuplicados([5, 5, 5, 5]));          // [5]
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
console.log(capitalizarPalabras("bienvenidos al curso"));       // "Bienvenidos Al Curso"
console.log(capitalizarPalabras("javascript es genial"));      // "Javascript Es Genial"
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
console.log(fibonacci(7));  // [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacci(3));  // [0, 1, 1]
/*Para generar la sucesión de Fibonacci, empecé con los dos primeros números [0, 1], luego fui sumando los dos números anteriores para obtener el siguiente número. 
Utilicé slice para devolver los primeros números de la secuencia que sean solicitados.*/
