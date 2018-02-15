function Soal0205(n, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 02 Soal 05";
    var matrix = document.getElementById("matrix");
    var arrP = arraySetLengthES6(n, n, 0);
    for (let I = 0; I < n; I++) {
        var odd = 1; 
        for (let J = 0; J < n; J++) {
            if (J <= I) { 
                arrP[I][J] = odd;
            } else {
                arrP[I][J] = "";
            }
            odd += 2; 
        }
    }
    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}