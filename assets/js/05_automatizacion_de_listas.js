const app = document.getElementById('app') 
const videoGames= ["cole", "db", "dgbcejcb"]
const ul = document.createElement("ul")


for(let i=0; i<videoGames.length; i++){
  const li = document.createElement("li")
  li.innerHTML= videoGames[i]
  ul.appendChild(li)

}
app.appendChild(ul)