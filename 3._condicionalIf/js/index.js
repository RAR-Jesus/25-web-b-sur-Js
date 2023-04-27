var nombreCompleto, añoNacimiento, añoActual, edad, mgs, cantidadCaracteres;

// Datos

nombreCompleto= prompt ('Ecribe tu nombre completo')
añoNacimiento= Number(prompt('Escribe tu año de Nacimiento'))
añoActual = Number(prompt('Escribe el añoactual'))

//Proceso logico
                                       
edad = añoActual - añoNacimiento;

if (nombreCompleto== "" || añoNacimiento==0 || añoActual==0 ){
    mgs='Te hacen falta datos'
}
else if(añoNacimiento>añoActual){
    mgs='Cuidado, el año de Nacimiento no puede ser mayor al actual'

}
else{
    if(edad <= 11){
        mgs= `Hola ${nombreCompleto} tu eres un niño aun`;
    }
    else if (edad > 13 && edad < 18){
        mgs = `Hola ${nombreCompleto} eres un adolecente`;
    }
    else if(edad >= 18 && edad < 65){
        mgs = `Hola ${nombreCompleto} eres un adulto`;
    }
    else{
        mgs = `Hola ${nombreCompleto} tu eres un adulto mayor`
    }

}

// Resultado / salida de datos


alert(mgs);