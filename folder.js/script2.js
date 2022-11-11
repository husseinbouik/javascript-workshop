function datevalidation() {
let j = Number(Jour.value);
let m = Number(Mois.value);
let a = Number(Annee.value);
let fulldate = j + "/" + m + "/" + a ;
    var bissextille, cas1, cas2, cas3, cas4;
    bissextille = a % 400 == 0 || a % 4 == 0 && a % 100 != 0;
    cas1 = a > 0 && (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) && (j >= 1 && j <= 31);
    cas2 = a > 0 && (m == 4 || m == 6 || m == 9 || m == 11) && (j >= 1 && j <= 30);
    cas3 = a > 0 && m == 2 && !bissextille && (j >= 1 && j <= 28);
    cas4 = a > 0 && m == 2 && bissextille && (j >= 1 && j <= 29);
    if (cas1 || cas2 || cas3 || cas4) {
        resultdate.innerHTML = fulldate + " La date est valide." ;
    } else {
        resultdate.innerHTML = fulldate + " La date est invalide!! " ;
}
}