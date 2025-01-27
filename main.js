
let a = +prompt("enter the number")

function odd(x) {
    if(x%2===0){
        return "odd"
    }
    else if (x%2===1) {
        return "even"
    }
    else {
        return "error"
    }
    
}

let b = odd(a)
let data = document.getElementById("demo")
data.innerText = b