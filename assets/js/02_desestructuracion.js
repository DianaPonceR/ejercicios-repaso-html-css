function saludo({nombre, apellido_paterno, apellido_materno}){
    return `Hola ${nombre} ${apellido_paterno} ${apellido_materno}`

}

function obtener_edad({edad}){
    return `Tu edad es: ${edad}`
}

function obtener_telefono({telefono}){
    return `Tu Telefono es: ${telefono}`
}

function obtener_email({email}){
    return `Tu Email es : ${email}`
}

const person={
    nombre: "XXXXXXXXXXXXXXXXXXXX",
    apellido_paterno: "XXXXXXXXXXXXXXXXXXX",
    apellido_materno:"XXXXXXXXXXXXXXXXXXXX",
    edad: "xx",
    email: "XXXXXXXXXXXXXXXXXX",
    telefono: "XXXXXXXXXXXXXXXXXXXX"
}

console.log(saludo(person))
console.log(obtener_edad(person))
console.log(obtener_email(person))
console.log(obtener_telefono(person))