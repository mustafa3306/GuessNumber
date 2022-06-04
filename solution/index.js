
let myBtn = document.querySelector("button");
let myInp = document.getElementById("inptBox");
let myMsg = document.querySelector("h4");


let rasgeleSayi = Math.floor(Math.random() * 100 + 1);
let atmpt = document.querySelector("span");
let counter = 0;
let lowest = 0;
let highest = 100;

console.log(rasgeleSayi);
myBtn.addEventListener("click", () => {
    if(myInp.value > lowest && myInp.value < highest){
        counter++
        atmpt.innerText = counter
        if(rasgeleSayi == myInp.value){
            myMsg.innerText = "Lucky. You won !"
        }
        else if(rasgeleSayi > myInp.value){
            myMsg.innerText = `Enter a number between ${myInp.value} and ${highest}`;
            lowest = myInp.value
               
        }
        else if(rasgeleSayi < myInp.value){
            myMsg.innerText = `Enter a number between ${lowest} and ${myInp.value}`
            highest = myInp.value
        }
    }else{
        myMsg.innerText = `Enter a number between 0 and 100`
    }
})



