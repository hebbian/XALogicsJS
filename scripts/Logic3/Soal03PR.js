function Soal03PR(n, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 03 Soal PR";
    var matrix = document.getElementById("matrix");
    var arrP = arraySetLengthES6(n, n, "");
    var fibo = arrFibo2(n);
    //var alphabets = createAlphabetArray();
    var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    // loop for row
    for (let I = 0; I < n; I++) {
        // loop for column
        var alphabetIndex = 0;
        for (let J = 0; J < n; J++) {
            if (I == J) {
                arrP[I][J] = fibo[J];
            } else if (I + J == n - 1) {
                arrP[I][J] = fibo[J];
            } else if (I == parseInt(n/2)) {
                arrP[I][J] = alphabets[alphabetIndex];
                if (J != parseInt(n/2)) {
                    alphabetIndex += 1;
                }
            }
        }
    }
    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}
