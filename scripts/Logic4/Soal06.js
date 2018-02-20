function Soal0406(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 04 Soal 06";
    var matrix = document.getElementById("matrix");
    var nl = (n * 2) - 1;
    var arr = arraySetLengthES6(n, nl, "");
    var f = [];
    var left = n, right = n;

    // fill array
    for (let I = 0; I < n; I++) {
        var idx = 1;
        for (let J = 0; J < nl; J++) {
            if (J >= left - 1 && J <= right - 1) {
                arr[I][J] = idx;
                if (J < n - 1) {
                    idx += 2;
                } else {
                    idx -= 2;
                }
            }
        }
        right += 1;
        left -= 1;
    }

    // print array
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}
