function multiplication() {
    var num = document.getElementById("number").value;
    document.getElementById("result").innerHTML ="";
    for(i=0;i<=10;i++){
document.getElementById("result").innerHTML += num+" "+'*'+" "+i+" "+'='+" "+num*i +`<br>` ;
}
}
