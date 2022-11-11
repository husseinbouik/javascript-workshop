function voyelles(){
    var str =document.getElementById('texte').value;
    var voyelles ="a e i o u y A E I O U Y";
    var ctr=0;
    for(var x=0;x<str.length;x++){
    for(var i=0;i<voyelles.length;i++){
    if(str[x]==voyelles[i])
    {
    ctr++;
    }
}
    document.getElementById("result").innerHTML="the number of vowel is "+ctr;
}
}