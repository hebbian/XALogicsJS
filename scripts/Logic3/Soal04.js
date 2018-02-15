function Soal0304(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 03 Soal 04";
    var matrix = document.getElementById("matrix");
    var arr = arraySetLengthES6(1, n, 0);
    var f = [];

    // populate array
    for (p=0; p<n; p++) {
        if (p>2) {
            f[p] = f[p - 3] + f[p - 2] + f[p - 1];
        } else {
            f[p] = 1;
        }
    }

    // fill array
    var mid = (n - 1) / 2;
    for (let I = 0; I < 1; I++) {
        for (let J = 0; J < n; J++) {
            if (J <= mid) {
                arr[I][J] = f[J];
            } else {
                arr[I][J] = f[n - J - 1];
            }
        }
    }

    // print array
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}
