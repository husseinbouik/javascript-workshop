function diamond(val) {
  var y, w, shape = '';
  for(y = 0; y < val * 2 - 1; y += 2) {
    if (val % 2 != 0) {
      w = y < val ? y : val * 2 - y - 2;
      shape += Array(val - w).join(" ") + Array(w + 1).join('* ') + '*\n';
      document.getElementById("u").innerHTML = "";
    } else {
      document.getElementById("u").innerHTML = "ERROR entrer un nombre Impair";
    }
  }
  return ('<pre>' + shape + '</pre>');
}
document.getElementById("dessiner").onclick = function () {
  let nm = document.getElementById("nmbr").value;
  const result = diamond(nm);
  document.getElementById("p").innerHTML = result ;
}
console.log(`hulfa`)
