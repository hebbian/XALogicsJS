function Soal0110(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 01 Soal 10";
    var matrix = document.getElementById("matrix");
    var arrP = [];
    for (let I = 0; I < n; I++) {
        var arrC = [];
        for (let J = 0; J < n; J++) {
            // left triangle
            if(I >= J &&
               J < n - I &&
               I <= (n-1)/2) {  
                arrC.push("*");
            } 
            // right triangle
            else if(I <= J &&
                I >= n - (J + 1) &&
                I >= (n-1)/2) { 
                arrC.push("*");
            } 
            else {
                arrC.push("");
            }
        }    
        arrP.push(arrC);
    }
    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}