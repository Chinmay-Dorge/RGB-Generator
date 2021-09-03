function rgbGenerate(){
    let r = document.getElementById("redValue").value;
    let g = document.getElementById("greenValue").value;
    let b = document.getElementById("blueValue").value;
    
    let color = "rgb(" + r + "," + g + "," + b + ")";

    document.getElementById("output").style.backgroundColor = color;
    document.getElementById("result").value = color;
}

function generateRandom(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    let color = "rgb(" + r + "," + g + "," + b + ")";

    document.getElementById("output").style.backgroundColor = color;
    document.getElementById("result").value = color;
}

document.getElementById("redValue").addEventListener("input",rgbGenerate);
document.getElementById("greenValue").addEventListener("input",rgbGenerate);
document.getElementById("blueValue").addEventListener("input",rgbGenerate);
document.getElementById("random").addEventListener("click",generateRandom);