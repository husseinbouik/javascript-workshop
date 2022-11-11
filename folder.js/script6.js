function plus() {
    var numbr1 = Number(document.getElementById('numbr1').value);
    var numbr2 = Number(document.getElementById('numbr2').value);
    document.getElementById('results').innerHTML = ( numbr1 + numbr2)
    }
function moine() {
    var numbr1 = document.getElementById('numbr1').value;
    var numbr2 = document.getElementById('numbr2').value;
    document.getElementById('results').innerHTML = (  numbr1 - numbr2)
}
function multiplcation() {
    var numbr1 = document.getElementById('numbr1').value;
    var numbr2 = document.getElementById('numbr2').value;
    document.getElementById('results').innerHTML = ( numbr1 * numbr2)
}
function ical() {
    var numbr1 = document.getElementById('numbr1').value;
    var numbr2 = document.getElementById('numbr2').value;
    document.getElementById('results').innerHTML = ( numbr1 / numbr2)
}