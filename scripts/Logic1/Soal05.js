function Soal0105(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 01 Soal 05";
    var matrix = document.getElementById("matrix");
    var arrP = [];
    for (let I = 0; I < n; I++) {
        var arrC = [];
        for (let J = 0; J < n; J++) {
            if(I == J){ 
                arrC.push("*");
            } else if (I + J == n - 1) { 
                arrC.push("*");
            } else if ( I == 0) {
                arrC.push("*");
            } else if ( J == 0) {
                arrC.push("*");
            } else if ( J == n - 1) {
                arrC.push("*");
            } else if ( I == n - 1) {
                arrC.push("*");
            } else {
                arrC.push("");
            }
        }    
        arrP.push(arrC);
    }
    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}
