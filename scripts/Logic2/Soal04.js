function Soal0204(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 02 Soal 4";
    var matrix = document.getElementById("matrix");
    var arrP = arraySetLengthES6(n, n, 0);
    for (let I = 0; I < n; I++) {
        for (let J = 0; J < n; J++) {

            if (I == J) { // right diagonal
                arrP[I][J] = I * 2 + 1;

            } else if (I + J == n - 1) { // left diagonal
                arrP[I][J] = J * 2;

            } else if ( I == (n - 1) / 2) { // horizontal 
                arrP[I][J] = J * 2;

            } else if ( J == (n - 1) / 2) { // vertical 
                arrP[I][J] = I * 2 + 1;

            } else {
                arrP[I][J] = "";
            }

        }
    }
    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}

