function Soal0502(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 05 Soal 01";
    var matrix = document.getElementById("matrix");
    let width = factorialSquare(n);
    let height = factorialSquare(n);
    var arr = arraySetLengthES6(height, width, "");
    var f = [];

    // fill array
    /*for (var shape=0; shape<n; shape++) {
        var pos = factorialSquare(shape); // 0, 1, 3, 6, 10, 15 ...
        for (let I = 0; I < height; I++) {
            for (let J = 0; J < width; J++) {
                if (I >= pos && // y position
                    width - 1 - J <= pos + shape && // x position
                    width - 1 - J >= pos && // width
                    I <= pos + shape) { // height
                    arr[I][J] = "*";
                }
            }
        }
    }*/

    // purple box
    //var hcshape = 0;
    //var hcpos = 0;

    // blue box
    //var hcshape = 1;
    //var hcpos = 1;

    // green box
    var hcshape = 2;
    var hcpos = 3;
    
    // red box
    //var hcshape = 3;
    //var hcpos = 6;

    for (let I = 0; I < height; I++) {
        for (let J = 0; J < width; J++) {
            if (I >= hcpos && // y position
                I <= hcpos + hcshape && // height
                width - 1 - J <= hcshape + hcpos && // x position
                width - 1 - J >= hcpos) { // width
                arr[I][J] = "*";
            }
        }
    }


    // print array
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}
