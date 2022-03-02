document.getElementById('calculo').onclick = converter;
var temp, tempC, tempF, tempK, tempR, select
function converter(){
    temp = document.getElementById('valor').value;
    select = document.getElementById('opções').value;
    if(select=='celsius'){
        tempF = (parseFloat(temp)*1.8)+32;
        tempK = (parseFloat(temp)+273.15)
        tempR = (parseFloat(temp)+273.15)*1.8;
        document.getElementById('cels').style.display = "none";
        document.getElementById('kelv').style.display = "block";
        document.getElementById('fahr').style.display = "block";
        document.getElementById('rank').style.display = "block";
    } else if(select=='fahrenheit'){
        tempC = (parseFloat(temp)-32)/1.8;
        tempK = parseFloat(temp-32)*(5/9) +273;
        tempR = (parseFloat(temp)+459.67);
        document.getElementById('cels').style.display = "block";
        document.getElementById('fahr').style.display = "none";
        document.getElementById('kelv').style.display = "block";
        document.getElementById('rank').style.display = "block";
    }else if(select=='kelvin'){
        tempC = (parseFloat(temp)-273);
        tempF = ((parseFloat(temp)-273)*1.8)+32;
        tempR = (parseFloat(temp)*1.8)
        document.getElementById('cels').style.display = "block";
        document.getElementById('fahr').style.display = "block";
        document.getElementById('kelv').style.display = "none";
        document.getElementById('rank').style.display = "block";
    }else if(select=='rankine'){
        tempC = (parseFloat(temp)/8)-273.15;
        tempF = (parseFloat(temp)-459.67);
        tempK = (parseFloat(temp)/1.8);
        document.getElementById('cels').style.display = "block";
        document.getElementById('fahr').style.display = "block";
        document.getElementById('kelv').style.display = "block";
        document.getElementById('rank').style.display = "none";
    }   
    document.getElementById("fahr").innerHTML = parseFloat(tempF).toFixed(2) +" °F";
    document.getElementById("cels").innerHTML = parseFloat(tempC).toFixed(2) +" °C";
    document.getElementById("kelv").innerHTML = parseFloat(tempK).toFixed(2)+" K";
    document.getElementById("rank").innerHTML = parseFloat(tempR).toFixed(2)+" °R";
}
