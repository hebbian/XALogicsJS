function Soal04PostTest(n1, n2, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 04 Soal Post Test";
    var matrix = document.getElementById("matrix");
    var arrayLength = n1 * n2 - n2 + 1;
    var arrP = arraySetLengthES6(n1, arrayLength, "");
    var left = parseInt(n1/2) + 1;
    var right = left;
    var number = 1;

    // loop for row
    for (let I = 0; I < n1; I++) {
        // loop for shapes
        for (var shape=0; shape<n2; shape++) {
            // loop for column
            for (let J = 0; J < n1; J++) {
                if (J >= left - 1 && J <= right - 1) {
                    arrP[I][(n1 * shape) + J - shape] = number;
                    if (J < parseInt(n1/2)) {
                        number += 2;
                    } else {
                        number -= 2;
                    }
                } else {
                    arrP[I][J] = "";
                }
            }
            number = 1;
        }

        if (I < parseInt(n1/2)) {
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
