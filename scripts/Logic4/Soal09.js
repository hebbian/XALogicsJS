function Soal0409(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 04 Soal 09";
    var matrix = document.getElementById("matrix");
    var width = n;
    var height = n;
    var n2 = 2;
    var shapesWidth = n * n2 - 1;
    var mid = (n - 1) / 2; // 4
    var arr = arraySetLengthES6(n,shapesWidth, "");
    var left = mid; 
    var right = mid;

    // fill array
    for (let I = 0; I < height; I++) {
        for (var shape=0; shape<n2; shape++) {
            for (let J = 0; J < width; J++) {
                if (J >= left && J <= right) {
                    // 4 - 12
                    // 3 - 11, 4 - 12, 5 - 13
                    // 2 - 10, 3 - 11, 4 - 12, 5 - 13, 6 - 14
                    // 1 - 9, 2 - 10, 3 - 11, 4 - 12, 5 - 13, 6 - 14, 7 - 15
                    
                    // shape = 0
                    // n = 9
                    // J = 4
                    // x = (n * shape) + J - shape

                    // x = (9 * 0) + 4 - 0 => 4
                    // x = (9 * 0) + 3 - 0 => 3
                    // x = (9 * 0) + 6 - 0 => 6
                    // x = (9 * 1) + 4 - 1 => 12
                    // x = (9 * 1) + 3 - 1 => 11

                    //arr[I][(n * shape) + J - shape] = "*"; 
                    //arr[I][J] = "*";
                    arr[I][(n * shape) + J - shape] = "*";
                } else {
                    arr[I][J] = "";
                }
            }
        }
        if (I < mid) {
            right += 1;
            left -= 1;
        } else {
            right -= 1;
            left += 1;
        }
    }

    // print array
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}

