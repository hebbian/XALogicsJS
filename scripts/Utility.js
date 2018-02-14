function printArray(arr, con=false)
{
    var result = "";
    if(con)
    {
        result += "<tr><td>R/C</td>"
        for (let I = 0; I < arr[0].length; I++) {
            result += "<td>" + I + "</td>";    
        }
        result += "</tr>"
    }
    // loop first array
    for (let I = 0; I < arr.length; I++) {
        let arrChild = arr[I];
        if(con){
            // create <tr> element
            result += "<tr><td>" + I + "</td>";
        }
        // loop second array
        for (let J = 0; J < arrChild.length; J++) {
            // create <td> element on each iteration
            result += "<td>" + arrChild[J] + "</td>";
        }
        // close <tr>
        result += "</tr>";
    }

    // return result
    return result;
}

function arraySetLength(n1, n2, val=""){
    var arr2 = [];
    for (let I = 0; I < n1; I++) {
        var arr1 = [];
        for (let J = 0; J < n2; J++) {
            arr1.push(val);
        }
        arr2.push(arr1);
    }
    return arr2;
}

function arraySetLengthES6(n1, n2, val="") {
    var arr = new Array(n1).fill(val);
    for (idx in arr) {
        arr[idx] = new Array(n2).fill(val);
    }
    return arr;
}