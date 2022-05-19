const frutas =["manzana", "platano chiapas", "pera", "uva"]
console.log(frutas.length)
console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])

console.log()


for(let index=0; index < frutas.length; index++) {
    //console.log((index+1) +".-" + frutas[index])
    console.log(`${index+1} .- ${frutas[index]}`)

}

frutas.push("mango")
frutas.push("granada")
console.log(frutas)

frutas.pop()
console.log(frutas)