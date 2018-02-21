function Soal0501(n, rule){
    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 05 Soal 01";
    var matrix = document.getElementById("matrix");
    let width = factorialSquare(n);
    let height = factorialSquare(n);
    var arr = arraySetLengthES6(height, width, "");
    var f = [];

    // 0, 1, 3, 6, 10, 15 ...
    // 0 -> 0
    // 1 -> 1 + 0 = 1
    // 2 -> 2 + 1 + 0 = 3
    // 3 -> 3 + 2 + 1 + 0 = 6
    // 4 -> 4 + 3 + 2 + 1 + 0 = 10
    // 5 -> 5 + 4 + 3 + 2 + 1 + 0 = 15
    // ....

    // fill array
    for (var shape=0; shape<n; shape++) {
        var pos = factorialSquare(shape);
        for (let I = 0; I < height; I++) {
            for (let J = 0; J < width; J++) {
                if (I >= pos && // y position
                    J >= pos && // x position
                    I <= pos + shape && // width
                    J <= pos + shape) { // height
                    arr[I][J] = "*";
                }
            }
        }
    }

    /*var x = 6, y = 4;
    var w = 3, h = 4;
    for (let I = 0; I < height; I++) {
        for (let J = 0; J < width; J++) {
            if (I >= y && // y position
                J >= x && // x position
                I < y + h && // height
                J < x + w) { // width
                arr[I][J] = "*";
                }
        }
    }*/

    // print array
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}
