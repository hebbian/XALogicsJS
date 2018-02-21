function Soal04PostTest(n1,rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 04 Soal Post Test";
    var matrix = document.getElementById("matrix");
    var arrayLength = (n1 * 2) - 1;
    var arrP = arraySetLengthES6(n1, arrayLength, "");
    var fibo = arrFibo2(n1);
    var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    // loop for row
    for (let I = 0; I < n1; I++) {
        // loop for column
        for (let J = 0; J < n1; J++) {
            if (I == J) {
                arrP[I][J] = fibo[J];
                arrP[I][arrayLength-1-J] = fibo[I];
            } else if (I+J == n1 - 1) {
                arrP[I][J] = fibo[J];
                arrP[I][arrayLength-1-J] = fibo[J];
            } else if (J > (I + 1) && I + J < n1 - 2) { // Triangle A
                arrP[I][J] = "A";
                arrP[n1-1-I][J] = "B";
                arrP[I][arrayLength-1-J] = "C";
                arrP[n1-1-I][arrayLength-1-J] = "D";
            } else if (I > (J + 1) && I + J < n1 - 2) { // Triangle A
                arrP[I][J] = "E";
                arrP[I][arrayLength-1-J] = "F";
            }

        }
    }

    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}
