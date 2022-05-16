const result= document.getElementById("result")
const suma= document.getElementById("suma")
const resta= document.getElementById("resta")





let count= 0

suma.onclick = () => {
    count+= 1
    console.log(count)
    result.innerHTML = count

}

resta.onclick=() =>{
    if(count==0){
        count=0
    } else{
        count-= 1
        console.log(count)
        result.innerHTML=count
    }
    
}

