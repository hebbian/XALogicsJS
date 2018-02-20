function Soal0408(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 04 Soal 08";
    var matrix = document.getElementById("matrix");
    var nl = n;
    var mid = (n + 1) / 2;
    var arr = arraySetLengthES6(n, nl, "");
    var left = mid; 
    var right = mid;

    // fill array
    for (let I = 0; I < n; I++) {
        var idx = 1;
        for (let J = 0; J < nl; J++) {
            if (J >= left - 1 && J <= right - 1) {
                arr[I][J] = idx;
                if (J < mid - 1) {
                    idx += 2;
                } else {
                    idx -= 2;
                }
            }
        }

        if (I + 1 < mid) {
            right += 1;
            left -= 1;
        } else {
            right -= 1;
            left += 1;
        }
    }

    // print array
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}

