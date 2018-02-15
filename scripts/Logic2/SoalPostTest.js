function Soal02PostTest(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 02 Soal Post Test";
    var matrix = document.getElementById("matrix");
    var arrP = arraySetLengthES6(n, n, 0);
    var f = [];

    // populate array
    for (let p=0; p<n; p++) {
        if (p > 1) {
            f[p] = f[p - 2] + f[p - 1];
        } else {
            f[p] = 1;
        }
    }

    for (let I = 0; I < n; I++) {
        for (let J = 0; J < n; J++) {
            if(J == (n-1)/2){ // middle 
                arrP[I][J] = f[I];

            } else if (I == J && // right diagonal
                J >= (n-1) / 2) { // cut
                arrP[I][J] = f[I];


            } else if (I + J == n - 1 && // left diagonal
                I >= (n-1) / 2) { // cut
                arrP[I][J] = f[I];

            } else {
                arrP[I][J] = "";
            }
        }    
    }
    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}