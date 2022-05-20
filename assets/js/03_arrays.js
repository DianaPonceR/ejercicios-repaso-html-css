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
frutas.unshift("papa")
console.log(frutas)
frutas.shift()
console.log(frutas)
frutas.pop()
console.log(frutas)

const videoGames= ["mario","infamous","uncharted","mariokart"] 
//const [mario, infamous, uncharted, mariokart]= videoGames
const [mario, , uncharted]= videoGames
console.log(uncharted)

const copia= videoGames.slice(0,4) 
//copia.push("golf")
console.log(videoGames)
console.log(copia)

const juegosDeMesa=["monopili","turista","elraton","uno"]