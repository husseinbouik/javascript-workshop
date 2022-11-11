function validetri() {
    var query = document.querySelectorAll("#tableau1 input");
    query.forEach((el) => el.remove());
    var querytri = document.querySelectorAll("#tableau-tri input");
    querytri.forEach((el) => el.remove());
    var taille1 = document.getElementById("nbr1-taille").value;
    for (i = 0; i < taille1; i++) {
    var table1 = document.getElementById("tableau1");
        var inputtri = document.createElement("input");
        inputtri.setAttribute("id", "inputIdtri" + i);
        inputtri.setAttribute("type", "number");
        table1.appendChild(inputtri);
    }
}
function tri() {
    const arraynbr1 = [];
    var taille = document.getElementById("nbr1-taille").value;
    var query = document.querySelectorAll("#tableau1 input");
    query.forEach((el) => arraynbr1.push(Number(el.value)));
    let num;
    for (i = 0; i < taille - 1; i++) {
    let min = i;
    for (j = i + 1; j < taille; j++) {
    if (arraynbr1[j] < arraynbr1[min]) {
        min = j;
    } else if (arraynbr1[j] == arraynbr1[min]) {
        min = i;
    }
    }
    if (min != i) {
        num = arraynbr1[i];
        arraynbr1[i] = arraynbr1[min];
        arraynbr1[min] = num;
    }
    }
    console.log(arraynbr1);
    for (i = 0; i < taille; i++) {
    var tabl = document.getElementById("tableau-tri");
    var inputtri1 = document.createElement("input");
    inputtri1.setAttribute("id", "inputIdtri1" + i);
    tabl.appendChild(inputtri1);
    document.getElementById("inputIdtri1" + i).value = arraynbr1[i];
    document.getElementById("inputIdtri1" + i).readOnly=true;
}
}
