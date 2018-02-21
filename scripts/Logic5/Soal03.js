function Soal0503(n, rule){

    console.log("result " + factorialTriangle(n));

    var txtNoSoal = document.getElementById("nomor-soal");
    txtNoSoal.innerHTML = "Bootcamp JS: Logic 05 Soal 03";
    var matrix = document.getElementById("matrix");
    let width = factorialSquare(n);
    let height = factorialSquare(n);
    var arr = arraySetLengthES6(height, width, "");
    var f = [];

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

    // print array
    var html = printArray(arr, rule);
    matrix.innerHTML = html;
}
