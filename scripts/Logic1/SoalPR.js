function Soal01PR(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 01 Soal PR";
    var matrix = document.getElementById("matrix");
    var arrP = [];
    for (let I = 0; I < n; I++) {
        var arrC = [];
        for (let J = 0; J < n; J++) {

            if (I == J) { // right diagonal
                arrC.push(I * 2 + 1); //1, 3, 5 ...

            } else if (I + J == n - 1) { // left diagonal
                arrC.push(n + J - I); // 17, 15, 13 ...

            } else if ( I == (n - 1) / 2) { // horizontal // i == 4
                arrC.push(J * 2 + 1); // 1, 3, 5 ...

            } else if ( J == (n - 1) / 2) { // vertical // j == 4
                arrC.push(I * 2 + 1); // 1, 3, 5 ...

            } else {
                arrC.push("");
            }

        }
        arrP.push(arrC);
    }
    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}
