function Soal0210(n, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 02 Soal 10";
    var matrix = document.getElementById("matrix");
    var arrP = arraySetLengthES6(n, n, 0);
    var mid = (n - 1) / 2;
    var even = 0; 

    // loop for row
    for (let I = 0; I < n; I++) {

        // loop for column
        for (let J = 0; J < n; J++) {
            arrP[I][J] = even;
        }

        if (I >= mid) {
            even -= 2;
        } else { 
            even += 2; 
        }

    }
    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}
