function Soal0206(n, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 02 Soal 06";
    var matrix = document.getElementById("matrix");
    var arrP = arraySetLengthES6(n, n, 0);
    var even = (n - 1) * 2; 
    for (let I = 0; I < n; I++) {
        for (let J = 0; J < n; J++) {
            if (I + J >= n - 1) { 
                arrP[I][J] = even;
            } else {
                arrP[I][J] = "";
            }
        }
        even -= 2;
    }
    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}