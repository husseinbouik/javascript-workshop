
function searchinthearray(thearray,thevalue){
for(i = 0 ; i < thearray.length ; i++){
if(thearray[i] == thevalue ){
return true ;
break;
}
}
}
function maketable() {
    inputs.innerHTML = ""
    for(i = 0 ; i <  Number(numberoftable.value) ; i++){
        console.log(i);
        inputs.innerHTML += "<input type='text' id='inputid"+i+"' >"
}
}
const group = [];
function searchtable() {
    group.length = 0 ;
    for(i = 0 ; i <  Number(numberoftable.value) ; i++){
        group.push(document.getElementById("inputid"+i).value);
}
if( searchinthearray(group , searchfor.value)){
    result.innerHTML = searchfor.value + " found";
} else {
    result.innerHTML = searchfor.value + " not found";
    }
    }









