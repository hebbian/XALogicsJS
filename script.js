window.onload = function()
{
    var currLogic = localStorage.getItem("currLogic");
    var currSoal = localStorage.getItem("currSoal");
    var currNilai1 = localStorage.getItem("currNilai1");
    var rule = localStorage.getItem("showRule");

    if(currLogic != null){
        document.getElementById("input-logic").value = currLogic;
    }

    if(currSoal != null){
        document.getElementById("input-soal").value = currSoal;
    }
    
    if(currNilai1 != null){
        document.getElementById("input-nilai-1").value = currNilai1;
    }

    if(rule != null){
        document.getElementById("showrule").value = rule;
    }
}

function SelectSoal()
{
    var logic = parseInt(document.getElementById("input-logic").value);
    var soal = parseInt(document.getElementById("input-soal").value);
    var nilai = parseInt(document.getElementById("input-nilai-1").value);
    var rule = document.getElementById("showrule").checked;

    console.log("Selected Logic : " + logic);
    console.log("Selected Soal: " + soal)
    console.log("nilai.value : " + nilai);
    console.log("============================")

    function showNoEntry() {
        var matrix = document.getElementById("matrix");
        matrix.innerHTML = "<h3>Logic "+logic+" Soal "+soal+" : Jawaban tidak ditemukan.</h3>"
    }

    if (logic == 1) {
        switch (soal) {
            case 1:
                Soal0101(nilai, rule);
                break;
            case 2:
                Soal0102(nilai, rule);
                break;
            case 3:
                Soal0103(nilai, rule);
                break;
            case 4:
                Soal0104(nilai, rule);
                break;
            case 5:
                Soal0105(nilai, rule);
                break;
            case 6:
                Soal0106(nilai, rule);
                break;
            case 7:
                Soal0107(nilai, rule);
                break;
            case 8:
                Soal0108(nilai, rule);
                break;
            case 9:
                Soal0109(nilai, rule);
                break;
            case 10:
                Soal0110(nilai, rule);
                break;
            case 11:
                SoalPostTest(nilai, rule);
                break;
            case 12:
                SoalPR(nilai, rule);
                break;
            default:
                showNoEntry()
                break;
        }
    } else if (logic == 2) {
        switch (soal) {
            case 1:
                Soal0201(nilai, rule);
                break;
            case 2:
                Soal0202(nilai, rule);
                break;
            case 3:
                Soal0203(nilai, rule);
                break;
            case 4:
                Soal0204(nilai, rule);
                break;
            case 5:
                Soal0205(nilai, rule);
                break;
            case 6:
                Soal0206(nilai, rule);
                break;
            case 7:
                Soal0207(nilai, rule);
                break;
            case 8:
                Soal0208(nilai, rule);
                break;
            case 9:
                Soal0209(nilai, rule);
                break;
            case 10:
                Soal0210(nilai, rule);
                break;
            default:
                showNoEntry();
                break;
        }
    } else if (logic == 3) {
        switch (soal) {
            case 1:
                Soal0301(nilai, rule);
                break;
            case 2:
                Soal0302(nilai, rule);
                break;
            case 3:
                Soal0303(nilai, rule);
                break;
            case 4:
                Soal0304(nilai, rule);
                break;
            case 5:
                Soal0305(nilai, rule);
                break;
            case 6:
                Soal0306(nilai, rule);
                break;
            case 7:
                Soal0307(nilai, rule);
                break;
            case 8:
                Soal0308(nilai, rule);
                break;
            case 9:
                Soal0309(nilai, rule);
                break;
            case 10:
                Soal0310(nilai, rule);
                break;
            default:
                showNoEntry();
                break;
        }
    } else {
        showNoEntry();
    }
    
    localStorage.setItem('currLogic', logic);
    localStorage.setItem('currSoal', soal);
    localStorage.setItem('currNilai1', nilai);
    localStorage.setItem('showRule', rule);
}
