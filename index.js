function rgbGenerate(){
    var r = document.getElementById("redValue").value;
    var g = document.getElementById("greenValue").value;
    var b = document.getElementById("blueValue").value;
    
    var color = "rgb(" + r + "," + g + "," + b + ")";

    document.getElementById("output").style.backgroundColor = color;
}

document.getElementById("redValue").addEventListener("input",rgbGenerate);
document.getElementById("greenValue").addEventListener("input",rgbGenerate);
document.getElementById("blueValue").addEventListener("input",rgbGenerate);