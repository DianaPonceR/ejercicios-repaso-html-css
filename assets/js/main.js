const result= document.getElementById("result")
const suma= document.getElementById("suma")
const resta= document.getElementById("resta")
const multi=document.getElementById("multi")




let count= 0
let rMulti

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

multi.onclick=()=>{
    rMulti= 5*8
    resultM.innerHTML=rMulti
    
}

divi.onclick=()=>{
    rDiv= 9/3
    resultD.innerHTML=rDiv
}
