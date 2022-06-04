let myBtn = document.querySelector("button");
let myInp = document.getElementById("inptBox");
let myMsg = document.querySelector("h4");
let rasgeleSayi = Math.floor(Math.random() * 100 + 1);
console.log(rasgeleSayi);
myBtn.addEventListener("click", () => {
    
    console.log(rasgeleSayi);
    if(rasgeleSayi == myInp.value){
        myMsg.innerText = "Lucky. You won!"
    }
    else if(rasgeleSayi > myInp.value){
        myMsg.innerText = `Enter a number between ${myInp.value} and 100`
    }
    else if(rasgeleSayi < myInp.value){
        myMsg.innerText = `Enter a number between 0 and ${myInp.value}`
    }
    
})
