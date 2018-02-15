function Soal0308(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 03 Soal 08";
    var matrix = document.getElementById("matrix");
    var arr = arraySetLengthES6(n, n, "");
    var f = [];

    // populate array
    // 1,2,3,4,5,4,3,2,1
    for (p=0; p<n; p++) {
        if (p <= (n - 1) / 2) {
            f[p] = p + 1;
        } else {
            f[p] = n - p;
        }
    }

    // fill array
    var mid = (n - 1) / 2;
    for (let I = 0; I < n; I++) {
        for (let J = 0; J < n; J++) {

            if (J >= I && J < n - I && I % 2 == 0) { // top triangle
                arr[I][J] = f[I];
            } else if (J <= I && I + J >= (n - 1) && I % 2 == 0) { // bottom triangle
                arr[I][J] = f[n - I - 1];
            } else if (J <= I && I + J <= (n - 1) && J % 2 == 0) { // left triangle
                arr[I][J] = f[J];
            } else if (J >= I && I + J >= (n - 1) && J % 2 == 0) { // right triangle
                arr[I][J] = f[n - J - 1];
            }


        }
    }

    // print array
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}
