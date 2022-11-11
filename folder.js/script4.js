const randomNumber = Math.floor(Math.random() * 50) + 1;
// Math.floor = 0.44 -> 0 ; 0.55 -> 1
// console.log(Math.random()*50)
console.log(randomNumber);
let i = 10 ;
function Démo() {
i--;
numberMoine.innerHTML = i ;
while( i >= 0){ 
if(i <= 0){
NumberResult.innerHTML = "Game Over!!";
theplayerbtn.outerHTML ="";        
break;
}
if(NumberValue.value == randomNumber){
    NumberResult.innerHTML = "Bravo!!";
theplayerbtn.outerHTML ="";        
break;
} else {
    // NumberResult.innerHTML = "";
    NumberResult.innerHTML = "Réesseyez encore !";
break;
}
}
}