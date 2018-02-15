function Soal0208(n, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 02 Soal 08";
    var matrix = document.getElementById("matrix");
    var arrP = arraySetLengthES6(n, n, 0);
    for (let I = 0; I < n; I++) {
        var odd = 1; 
        var even = 0; 
        for (let J = 0; J < n; J++) {
            if (I == J) { // right diagonal
                arrP[I][J] = odd;
            } else if(I + J == n - 1) { // left diagonal
                arrP[I][J] = even;
            } else if (I > J && I + J < n -1) { // Triangle A
                arrP[I][J] = "A";
            } else if (J > I && I + J >= n) { // Triangle B
                arrP[I][J] = "B";
            } else {
                arrP[I][J] = "";
            }
            odd += 2; 
            even += 2; 
        }
    }
    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}
