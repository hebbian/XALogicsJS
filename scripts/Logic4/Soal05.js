function Soal0405(n, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 04 Soal 05";
    var matrix = document.getElementById("matrix");
    var arrP = arraySetLengthES6(n, n, "");
    var width = (n * 2) - 1
    var left = 0;
    var right = width;
    var number = 1;
    var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    // loop for row
    for (let I = 0; I < n; I++) {
        // loop for column
        for (let J = 0; J < width; J++) {
            if (J > left - 1 && J <= right - 1) {
                arrP[I][J] = alphabets[number - 1];
                number += 1;
            } else {
                arrP[I][J] = ""
            }
        }
        left += 1;
        right -= 1;
        number = 1;
    }
    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}
