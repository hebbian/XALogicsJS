function Soal0205(n, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 02 Soal 05";
    var matrix = document.getElementById("matrix");
    var arr = arraySetLengthES6(n, n, 0);
    var odd = 1;
    for (let I = 0; I < n; I++) {
        for (let J = 0; J < n; J++) {
            if (J <= I) { 
                arr[I][J] = odd;
            } else {
                arr[I][J]= "";
            }
            odd += 2;
        }
        odd = 1;
    }
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}