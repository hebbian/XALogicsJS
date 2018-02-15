function Soal0209(n, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 02 Soal 09";
    var matrix = document.getElementById("matrix");
    var arrP = arraySetLengthES6(n, n, 0);
    var mid = (n - 1) / 2;

    // loop for row
    for (let I = 0; I < n; I++) {
        var odd = 1; 

        // loop for column
        for (let J = 0; J < n; J++) {
            arrP[I][J] = odd;

            if (J >= mid) {
                odd -= 2;
            } else { 
                odd += 2; 
            }

        }

    }
    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}
