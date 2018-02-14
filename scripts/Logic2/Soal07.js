function Soal0207(n, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 02 Soal 07";
    var matrix = document.getElementById("matrix");
    var arr = arraySetLengthES6(n, n, 0);
    var odd = 1;
    var even = (n - 1) * 2;
    for (let I = 0; I < n; I++) {
        for (let J = 0; J < n; J++) {
            if (I == J) { 
                arr[I][J] = odd;
            } else if ((n - 1) - J == I) { 
                arr[I][J] = even;
            } else if (I < J && (n - 1 - J) > I) { 
                arr[I][J] = "A";
            } else if (I >= J && (n - 1 - J) < I) { 
                arr[I][J] = "B";
            } else {
                arr[I][J]= "";
            }
        }
        even -= 2;
        odd += 2;
    }
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}