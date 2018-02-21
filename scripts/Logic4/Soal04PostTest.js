function Soal04PostTest(n1,rule) {
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 04 Soal Post Test";
    var matrix = document.getElementById("matrix");
    var width = (n1 * 2) - 1;
    var arrP = arraySetLengthES6(n1, width, "");
    var fibo = arrFibo2(n1);
    var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    var mid = parseInt(n1 / 2);

    // loop for row
    var num2 = 0;
    for (let I = 0; I < n1; I++) {
        var num = 0;

        // loop for column
        for (let J = 0; J < n1; J++) {
            if (I == J) {
                arrP[I][J] = fibo[J];
                arrP[I][width-1-J] = fibo[I];
            } else if (I+J == n1 - 1) {
                arrP[I][J] = fibo[J];
                arrP[I][width-1-J] = fibo[J];
            } else if (J > (I + 1) && I + J < n1 - 2) { // upper-bottom triangle
                arrP[I][J] = alphabets[num];
                arrP[n1-1-I][J] = alphabets[num];
                arrP[I][width-1-J] = alphabets[num];
                arrP[n1-1-I][width-1-J] = alphabets[num];

                if (J < mid) {
                    num += 1;
                } else {
                    num -= 1;
                }

            } else if (I > (J + 1) && I + J < n1 - 2) {  // left-right triangle
                arrP[I][J] = alphabets[num2 - J - 2];
                arrP[I][width-1-J] = alphabets[num2 - J - 2];
            }

        }
        if (I < mid) {
            num2 += 1;
        } else {
            num2 -= 1;
        }
    }

    var html = printArray(arrP, rule);
    matrix.innerHTML = html;
}
