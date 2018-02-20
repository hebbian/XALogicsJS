function Soal0307(n, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 03 Soal 07";
    var matrix = document.getElementById("matrix");
    var arrP = arraySetLengthES6(n, n, "");
    var fibo = arrFibo2(n);

    // loop for row
    for (let I = 0; I < n; I++) {
        // loop for column
        for (let J = 0; J < n; J++) {
            if (I + J <= (n - 1) && J >= I) { // up
                arrP[I][J] = fibo[I];
            } else if ( I + J >= (n - 1) && J >= I) { // right
                // expected : 0, 1, 2, 3
                // 8, 7, 6, 5
                // 9 - 8 - 1 = 0
                // n - J - 1
                // 9 - 5 - 1 = 3
                arrP[I][J] = fibo[n - J - 1];
            } else if (I >= J && I + J >= (n - 1)) { // bottom
                arrP[I][J] = fibo[n - I - 1];
            } else if (I >= J && I + J <= (n - 1)) { // left
                arrP[I][J] = fibo[J];
            }
        }
    }
    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}
