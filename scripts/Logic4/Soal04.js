function Soal0404(n, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 04 Soal 04";
    var matrix = document.getElementById("matrix");
    var arrP = arraySetLengthES6(n, n, "");
    var width = (n * 2) - 1;
    var left = n;
    var right = n;
    var number = 1;
    //var alphabets = createAlphabetArray();
    var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    var alphabetIndex = 0;
    // loop for row
    for (let I = 0; I < n; I++) {
        // loop for column
        for (let J = 0; J < width; J++) {
            if (J >= left - 1 && J <= right - 1) {
                arrP[I][J] = alphabets[alphabetIndex];
                alphabetIndex +=1;
            } else {
                arrP[I][J] = ""
            }
        }
        left -= 1;
        right += 1;
        alphabetIndex = 0;
    }
    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}