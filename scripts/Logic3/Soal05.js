function Soal0305(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 03 Soal 05";
    var matrix = document.getElementById("matrix");
    var arr = arraySetLengthES6(n, n, "");
    var f = [];

    // populate array
    for (p=0; p<n; p++) {
        if (p>1) {
            f[p] = f[p - 2] + f[p - 1];
        } else {
            f[p] = 1;
        }
    }

    // fill array
    for (let I = 0; I < n; I++) {
        for (let J = 0; J < n; J++) {
            if (I <= J) {
                if (J <= (n - 1) / 2) {
                    arr[I][J] = f[J];
                } else {
                    arr[I][J] = f[n - J - 1];
                }
            } else if (I + J >= n - 1) {
                if (J <= (n - 1) / 2) {
                    arr[I][J] = f[J];
                } else {
                    arr[I][J] = f[n - J - 1];
                }
            }
        }
    }

    // print array
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}
