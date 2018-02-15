function Soal0309(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 03 Soal 09";
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

            if (J >= I && J < n - I && I % 2 == 0) { // top triangle
                arr[I][J] = f[parseInt(I/2)];
            } else if (J <= I && I + J >= (n - 1) && I % 2 == 0) { // bottom triangle
                arr[I][J] = f[parseInt((n - I - 1)/2)];
            } else if (J <= I && I + J <= (n - 1) && J % 2 == 0) { // left triangle
                arr[I][J] = f[parseInt(J/2)];
            } else if (J >= I && I + J >= (n - 1) && J % 2 == 0) { // right triangle
                arr[I][J] = f[parseInt((n - J - 1)/2)];
            }


        }
    }

    // print array
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}
