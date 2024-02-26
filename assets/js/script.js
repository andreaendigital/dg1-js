//EJERCICIO NUMERO 2

// Solicitar al usuario que ingrese dos números diferentes y mayores a cero
let num1 = Number(prompt("Ingrese el primer número (debe ser mayor a cero):"));
let num2 = Number(prompt("Ingrese el segundo número (debe ser mayor a cero y diferente al primero):"));

// Verificar si los números ingresados son válidos
if (num1 <= 0 || num2 <= 0 || num1 === num2) {
    console.log("Los números ingresados no son válidos. Deben ser diferentes, mayores a cero.");
} else {
    // Realizar las operaciones
    let suma = num1 + num2;
    let resta = num1 - num2;
    let division = num1 / num2;
    let multiplicacion = num1 * num2;
    let modulo = num1 % num2;

    // Mostrar los resultados
    console.log(`La suma de ${num1} y ${num2} es igual a: ${suma}`);
    console.log(`La resta de ${num1} y ${num2} es igual a: ${resta}`);
    console.log(`La división de ${num1} entre ${num2} es igual a: ${division}`);
    console.log(`La multiplicación de ${num1} por ${num2} es igual a: ${multiplicacion}`);
    console.log(`El módulo de ${num1} entre ${num2} es igual a: ${modulo}`);

    alert(`La suma de ${num1} y ${num2} es igual a: ${suma}`);
    alert(`La resta de ${num1} y ${num2} es igual a: ${resta}`);
    alert(`La división de ${num1} entre ${num2} es igual a: ${division}`);
    alert(`La multiplicación de ${num1} por ${num2} es igual a: ${multiplicacion}`);
    alert(`El módulo de ${num1} entre ${num2} es igual a: ${modulo}`);
}


//EJERCICIO NUMERO 3


// Solicitar al usuario ingresar la temperatura en grados Celsius
const temperaturaCelsius = Number(prompt("Ingrese la temperatura en grados Celsius:"));

// Convertir Celsius a Kelvin
const temperaturaKelvin = temperaturaCelsius + 273.15;

// Convertir Celsius a Fahrenheit
const temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;

// Mostrar los resultados al usuario
console.log(`${temperaturaCelsius} grados Celsius son equivalentes a ${temperaturaKelvin} Kelvin.`);
console.log(`${temperaturaCelsius} grados Celsius son equivalentes a ${temperaturaFahrenheit} grados Fahrenheit.`);

alert(`${temperaturaCelsius} grados Celsius son equivalentes a ${temperaturaKelvin} Kelvin.`);
alert(`${temperaturaCelsius} grados Celsius son equivalentes a ${temperaturaFahrenheit} grados Fahrenheit.`);


//EJERCICIO NUMERO 4
// Respuesta sugerida del Chat GPT ya que me costó entender este ejercicio.

// Solicitar al usuario la cantidad de días
let cantidadDias = Number(prompt("Ingrese la cantidad de días:"));

// Calcular el equivalente en años, semanas y días
let anios = Math.floor(cantidadDias / 365);
let semanas = Math.floor((cantidadDias % 365) / 7);
let dias = cantidadDias % 7;

// Mostrar el resultado al usuario
console.log(`${cantidadDias} días equivalen a:`);
console.log(`${anios} año(s), ${semanas} semana(s) y ${dias} día(s).`);

alert(`${cantidadDias} días equivalen a: ${anios} año(s), ${semanas} semana(s) y ${dias} día(s).`);

//Explicación del Chat GPT: 
// La función Math.floor() en el código anterior se utiliza para redondear hacia abajo un número decimal a su entero más cercano. En este caso, se utiliza para obtener la parte entera de la división de la cantidad de días entre 365 y entre 7, respectivamente, para obtener el número de años y semanas completas.
//Si la cantidad de días es 373, al dividirla entre 365, se obtiene aproximadamente 1.02191781 años. Al aplicar Math.floor(), se redondea hacia abajo a 1, lo que significa que hay 1 año completo en 373 días.
// Para obtener el número de semanas, se toma el resto de la división de la cantidad de días entre 365 (lo que representa los días que quedan después de quitar los años completos) y se divide entre 7 para obtener el número de semanas completas. Por ejemplo, si la cantidad de días es 373, al calcular el resto de la división entre 365 (que es 8) y dividirlo entre 7, obtenemos 1 semana completa.



//EJERCICIO NUMERO 5
// Inicializar una variable para almacenar la suma de los números
let suma = 0;

// Solicitar al usuario ingresar 5 números
for (let i = 0; i < 5; i++) {
    // Solicitar al usuario que ingrese un número y agregarlo a la suma
    let numero = Number(prompt(`Ingrese un número ${i + 1}:`));
    suma += numero;
}
1
// Calcular el promedio de los números
let promedio = suma / 5;

// Mostrar los resultados
console.log("La suma de los números es:", suma);
console.log("El promedio de los números es:", promedio);

alert(`La suma de los números es : ${suma}`);
alert(`El promedio de los números es : ${promedio}`);
