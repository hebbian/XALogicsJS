function Soal0107(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 01 Soal 07";
    var matrix = document.getElementById("matrix");
    var arrP = [];
    for (let I = 0; I < n; I++) {
        var arrC = [];
        for (let J = 0; J < n; J++) {
            if(J + I >= n - 1){ 
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