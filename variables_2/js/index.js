// Obtener nombre, apellido, año de nacimiento, año actual, por medio de una division obtenr la edad.

//1. Datos de entrada
var nombre, apellido, añoNacimiento, añoActual, edad;


//2. Que tengo que hacer con los datos?
nombre=prompt('Escribe tu nombre :D');
apellido=prompt('Ahora tu apellido');
añoNacimiento= Number(prompt('¿En qué año naciste?'));
añoActual= Number(prompt('¿En qué año estamos?'));

edad= añoActual-añoNacimiento;

//3. como y que debo mostrar al usuario.

alert(`${nombre} ${apellido}, tu edad actual es: ${edad}`);

