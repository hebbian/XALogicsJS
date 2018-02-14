function Soal0210(n, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 02 Soal 10";
    var matrix = document.getElementById("matrix");
    var arr = arraySetLengthES6(n, n, 0);
    var even = 0;
    for (let I = 0; I < n; I++) {
        for (let J = 0; J < n; J++) {
            arr[I][J] = even;
            if (I < parseInt(n / 2)) { 
                even += 2;
            } else {
                even -= 2;
            }
        }
        even = 0;
    }
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}