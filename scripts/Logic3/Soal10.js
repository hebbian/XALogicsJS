function Soal0310(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 03 Soal 10";
    var matrix = document.getElementById("matrix");
    var arr = arraySetLengthES6(n, n, "");
    var f = [];

    // populate array
    // 1, A, 1, B, 2, C, 3, D, 5, E, 8
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var alphabetIndex = 0;
    for (p=0; p<n; p++) {
        if (p % 2 == 0) { // even
            if (p >= 4) {
                f[p] = f[p - 4] + f[p - 2];
            } else {
                f[p] = 1;
            }
        } else { // odd
            f[p] = alphabet[alphabetIndex];
            alphabetIndex += 1;
        }
    }

    // fill array
    var mid = (n - 1) / 2;
    for (let I = 0; I < n; I++) {
        for (let J = 0; J < n; J++) {

            if (J >= I && J < n - I) { // top triangle
                arr[I][J] = f[I];
            } else if (J <= I && I + J >= (n - 1)) { // bottom triangle
                arr[I][J] = f[n - I - 1];
            } else if (J <= I && I + J <= (n - 1)) { // left triangle
                arr[I][J] = f[J];
            } else if (J >= I && I + J >= (n - 1)) { // right triangle
                arr[I][J] = f[n - J - 1];
            }


        }
    }

    // print array
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}
