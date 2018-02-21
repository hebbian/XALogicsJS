function Soal0601(n, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 06 Soal 01";
    var matrix = document.getElementById("matrix");
    var width = factorialSquare(n);
    var arrP = arraySetLengthES6(width, width, "");

    // loop for row
    for (let I = 0; I < width; I++) {

        // loop for shape
        for (var shape=0; shape<n; shape++) {
            var pos = factorialSquare(shape);

            // loop for column
            for (let J = 0; J < width; J++) {
                if (J >= pos &&
                    I >= pos &&
                    J <= pos + shape &&
                    I <= pos + shape) {
                        arrP[I][J] = "*";
                    }
            }
        }
    }
    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}