function Soal0403(n, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 04 Soal 03";
    var matrix = document.getElementById("matrix");
    var arrP = arraySetLengthES6(n, n, "");
    var left = parseInt(n/2) + 1;
    var right = left;
    var number = 1;

    // loop for row
    for (let I = 0; I < n; I++) {
        // loop for column
        for (let J = 0; J < n; J++) {
            if (J >= left - 1 && J <= right - 1) {
                arrP[I][J] = number;
                number += 1;
            } else {
                arrP[I][J] = "";
            }
        }
        number = 1;

        if (I < parseInt(n/2)) {
            left -= 1;
            right += 1;
        } else {
            left += 1;
            right -= 1;
        }
    }

    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}
