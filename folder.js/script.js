function plus() {
    var numbr1 = Number(document.getElementById('numbr1').value);
    var numbr2 = Number(document.getElementById('numbr2').value);
    document.getElementById('results').innerHTML = ( numbr1 + numbr2)
    }
function moine() {
    var numbr1 = document.getElementById('numbr1').value;
    var numbr2 = document.getElementById('numbr2').value;
    document.getElementById('results').innerHTML = (  numbr1 -  numbr2)
}
function multiplcation() {
    var numbr1 = document.getElementById('numbr1').value;
    var numbr2 = document.getElementById('numbr2').value;
    document.getElementById('results').innerHTML = ( numbr1 *  numbr2)
}
function ical() {
    var numbr1 = document.getElementById('numbr1').value;
    var numbr2 = document.getElementById('numbr2').value;
    document.getElementById('results').innerHTML = ( numbr1 / numbr2)
}
// Valider une date
function datevalidation() {
    // var date;
    // var j, m, a;

  let j = Number(Jour.value);
  let m = Number(Mois.value);
  let a = Number(Annee.value);
let fulldate = m + "/" + j + "/" + a ;
    var bissextille, cas1, cas2, cas3, cas4;
    bissextille = a % 400 == 0 || a % 4 == 0 && a % 100 != 0;
    cas1 = a > 0 && (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) && (j >= 1 && j <= 31);
    cas2 = a > 0 && (m == 4 || m == 6 || m == 9 || m == 11) && (j >= 1 && j <= 30);
    cas3 = a > 0 && m == 2 && !bissextille && (j >= 1 && j <= 28);
    cas4 = a > 0 && m == 2 && bissextille && (j >= 1 && j <= 29);
    if (cas1 || cas2 || cas3 || cas4) {
    datevalidationresult.innerHTML = fulldate + " La date est valide." ;
    } else {
datevalidationresult.innerHTML = fulldate + " La date est invalide!! " ;

    }
}
//*************** */
const randomNumber = Math.floor(Math.random() * 50) + 1;
console.log(randomNumber);
let i = 10 ;
function NumberTest() {
i--;
numberofthetries.innerHTML = i ;
while( i >= 0){
if(i <= 0){
NumberTestResult.innerHTML = "Game Over!";
theplayerbtn.outerHTML ="";        
break;
}
if(NumbertestValue.value == randomNumber ){
NumberTestResult.innerHTML = "Bravo!";
break;
} else {
NumberTes
setTimeout(() => {
NumberTestResult.innerHTML = "Try again!";
}, 200);
break;
}
}
}















// ***************
