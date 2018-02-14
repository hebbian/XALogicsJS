function Soal0206(n, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 02 Soal 06";
    var matrix = document.getElementById("matrix");
    var arr = arraySetLengthES6(n, n, 0);
    var even = (n - 1) * 2;
    for (let I = 0; I < n; I++) {
        for (let J = 0; J < n; J++) {
            if (I + J >= n - 1) { 
                arr[I][J] = even;
            } else {
                arr[I][J]= "";
            }
        }
        even -= 2;
    }
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}