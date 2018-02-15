function Soal01PostTest(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 01 Soal Post Test";
    var matrix = document.getElementById("matrix");
    var arrP = [];
    for (let I = 0; I < n; I++) {
        var arrC = [];
        for (let J = 0; J < n; J++) {
            if(J == (n-1)/2){ // middle
                arrC.push("*");

            } else if (I == J && // right diagonal
                J >= (n-1) / 2) { // cut
                arrC.push("*");

            } else if (I + J == n - 1 && // left diagonal
                I >= (n-1) / 2) { // cut
                arrC.push("*");

            } else {
                arrC.push("");
            }
        }    
        arrP.push(arrC);
    }
    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}