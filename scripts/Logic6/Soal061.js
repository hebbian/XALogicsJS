function Soal06061(n, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 06 Soal 061";
    var matrix = document.getElementById("matrix");

    let width = n * n + 2;
    var arrP = arraySetLengthES6(n, width, "");

    for (let I=0; I<n; I++) {
        for (let J=0; J<width; J++) {
            arrP[I][J] = "*";
        }
    }

    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}