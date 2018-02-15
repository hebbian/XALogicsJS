function Soal0307(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 03 Soal 07";
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
    var mid = (n - 1) / 2;
    for (let I = 0; I < n; I++) {
        for (let J = 0; J < n; J++) {

            if (J >= I && J < n - I) { // top triangle
                arr[I][J] = f[I];
            } else if (J <= I && I + J >= (n - 1)) { // bottom triangle
                arr[I][J] = f[n - I - 1];
            } else if (J <= I) { // left triangle
                arr[I][J] = f[J];
            } else if (I + J >= (n - 1)) { // right triangle
                arr[I][J] = f[n - J - 1];
            }


        }
    }

    // print array
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}
