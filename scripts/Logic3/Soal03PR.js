function Soal03PR(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 03 Soal PR";
    var matrix = document.getElementById("matrix");
    var arr = arraySetLengthES6(n, n, "");
    var f = [];
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var alphabetIndex = 0;

    // populate array
    for (p=0; p<n; p++) {
        if (p>1) {
            f[p] = f[p - 2] + f[p - 1];
        } else {
            f[p] = 1;
        }
    }

    // fill array
    var mid = (n - 1) / 2;
    for (let I = 0; I < n; I++) {
        for (let J = 0; J < n; J++) {
            if (J == I) {
                arr[I][J] = f[I];
            } else if (I + J == n - 1) {
                arr[I][J] = f[J];
            } else if (I == (n - 1) / 2) {
                arr[I][J] = alphabet[alphabetIndex];
                if (J != (n - 1) / 2) {
                    alphabetIndex += 1;
                }
            }
        }
    }

    // print array
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}
