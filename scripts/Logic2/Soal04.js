function Soal0204(n, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 02 Soal 04";
    var matrix = document.getElementById("matrix");
    var arr = arraySetLengthES6(n, n, 0);
    for (let I = 0; I < n; I++) {
        for (let J = 0; J < n; J++) {

            if (I == J) { // right diagonal
                arr[I][J]= I * 2 + 1;

            } else if (I + J == n - 1) { // left diagonal
                arr[I][J]= n + J - I;

            } else if ( I == (n - 1) / 2) { // horizontal // i == 4
                arr[I][J]= J * 2 + 1;

            } else if ( J == (n - 1) / 2) { // vertical // j == 4
                arr[I][J]= I * 2 + 1;

            } else {
                arr[I][J]= "";
            }

        }
    }
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}