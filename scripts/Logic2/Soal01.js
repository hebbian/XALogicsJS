function Soal0201(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 02 Soal 01";
    var matrix = document.getElementById("matrix");
    var arr = arraySetLengthES6(n, n, 0);
    for (let I = 0; I < n; I++) {
        for (let J = 0; J < n; J++) {
            if(I == J){
                arr[I][J]= I + J + 1
            } else {
                arr[I][J]= ""
            }
        }
    }
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}
