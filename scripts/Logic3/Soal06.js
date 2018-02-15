function Soal0306(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 03 Soal 06";
    var matrix = document.getElementById("matrix");
    var arr = arraySetLengthES6(n, n, 0);
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

            if (I == J) { 
                arr[I][J] = f[J];
            } else if ((n - 1) - J == I) { 
                arr[I][J] = f[J];
            } else if (I < J && (n - 1 - J) > I) { 
                arr[I][J] = "A";
            } else if (I >= J && (n - 1 - J) < I) { 
                arr[I][J] = "C";
            } else if (J < I && (n - 1 - J) > I) { 
                arr[I][J] = "D";
            } else if (J >= I && (n - 1 - J) < I) { 
                arr[I][J] = "B";
            } else {
                arr[I][J]= "";
            }

        }
    }

    // print array
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}
