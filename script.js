function def() {
    var lt = document.getElementById("tempNum").value;
    var lt1 = document.getElementById("options").value;
    console.log(lt1)
    if (lt1 === "Celsius") {
        let y = 1.8 * lt;
        y+=32;
        document.getElementById("result").value = y  +" "+ "Fahrenheit";
    } else {
        lt-=32;
        let y = lt / 1.8;
        document.getElementById("result").value = y + "  Celsius";

    }
}