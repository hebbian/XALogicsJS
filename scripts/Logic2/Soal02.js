function Soal0202(n, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 02 Soal 02";
    var matrix = document.getElementById("matrix");
    var arrP = arraySetLengthES6(n, n, 0);
    for (let I = 0; I < n; I++) {
        var number = 0;
        for (let J = 0; J < n; J++) {
            if(I + J == n - 1){
                arrP[I][J] = number;
            } else {
                arrP[I][J] = "";
            }
            number += 2;
        }
    }
    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}