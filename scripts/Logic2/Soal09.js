function Soal0209(n, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 02 Soal 09";
    var matrix = document.getElementById("matrix");
    var arr = arraySetLengthES6(n, n, 0);
    var odd = 1;
    for (let I = 0; I < n; I++) {
        for (let J = 0; J < n; J++) {
            arr[I][J] = odd;
            if (J < parseInt(n / 2)) { 
                odd += 2;
            } else {
                odd -= 2;
            }
        }
        odd = 1;
    }
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}