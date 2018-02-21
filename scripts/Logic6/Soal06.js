function Soal0606(n, rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 06 Soal 06";
    var matrix = document.getElementById("matrix");

    nilaiLebar = n * n;
    nilaiPanjang = n * n;
    var arrP = arraySetLengthES6(nilaiLebar, nilaiPanjang, "");


    // loop for shape
    for (var bangun=0; bangun<n; bangun++) {
        //position
        let posV = bangun * n;
        let posH = bangun * n;

        //space
        let nLebar = (bangun + 1) * n;
        let nPanjang = (bangun + 1) * n;

        // margin 
        let midL = nPanjang - (n / 2) - 1;
        let midR = nPanjang - (n / 2) - 1;
        let mid = nPanjang - (n / 2) - 1;

        for (let I=posV; I<nLebar; I++) {
            for (let J=posH; J<nPanjang; J++) {
                if (J >= midL && J <= midR) {
                    arrP[I][J] = "*";
                }
            }

            if (I < mid) {
                midL--;
                midR++;
            } else {
                midL++;
                midR--;
            }
        }

    }
    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}