function saludo({nombre, apellido_paterno, apellido_materno}){
    console.log(`Hola ${nombre} ${apellido_paterno} ${apellido_materno}`)
}

function obtener_edad({edad}){
    console.log(`tu edad es: ${edad}`)
}

function obtener_telefono({telefono}){
    console.log(`Tu Telefono es: ${telefono}`)
}

function obtener_email({email}){
    console.log(`Tu Email es : ${email}`)
}

const person={
    nombre: "leo",
    apellido_paterno: "garcia",
    apellido_materno:"hinojosa",
    edad: "23",
    email: "leo.zmby@",
    telefono: "5566899030"
}

saludo(person);
obtener_edad(person)
obtener_email(person)
obtener_telefono(person)