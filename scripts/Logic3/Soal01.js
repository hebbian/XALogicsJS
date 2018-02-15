function Soal0301(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 03 Soal 01";
    var matrix = document.getElementById("matrix");
    var arr = arraySetLengthES6(1, n, 0);
    var f = [];

    // populate array
    for (p=0; p<n; p++) {
        if (p>1) {
            f[p] = f[p - 2] + f[p - 1];
        } else {
            f[p] = 1;
        }
    }

    // fill array
    for (let I = 0; I < 1; I++) {
        for (let J = 0; J < n; J++) {
            arr[I][J] = f[J];
        }
    }

    // print array
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}
