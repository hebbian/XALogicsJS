function Soal0203(n, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 02 Soal 03";
    var matrix = document.getElementById("matrix");
    var arrP = arraySetLengthES6(n, n, 0);
    for (let I = 0; I < n; I++) {
        var odd = 1; // assign 1 to variable odd
        var even = 0; // assign 0 to variable even
        for (let J = 0; J < n; J++) {
            if (I == J) { // right diagonal
                arrP[I][J] = odd;
            } else if(I + J == n - 1) { // left diagonal
                arrP[I][J] = even;
            } else {
                arrP[I][J] = "";
            }
            odd += 2; // add 2 for variable odd
            even += 2; // add 2 for variable even
        }
    }
    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}