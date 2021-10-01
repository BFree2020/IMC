const form = document.querySelector('#form')
let arreglo = [];
let IMC = document.getElementById("IMC");
let CalcularIMC = document.getElementById("calcular");
let borrar = document.getElementById("borrar");
CalcularIMC.addEventListener("click", clickCalcularIMC);
form.addEventListener('submit', (e) => {

  e.preventDefault()})

function clickCalcularIMC() {

  let s = document.getElementById("genero").value;
  let e = document.getElementById("Edad").value;
  let m = document.getElementById("Altura").value;
  let kg = document.getElementById("Peso").value;
  let imc2 = (kg / (m * m)* 10000);

  IMC.innerHTML = 
  `   <h3>Tu IMC es:</h3>
    <h3 Class="resultado"> ${imc2}</h3>` 
    
  if( m == "" && kg == "") {

    alert("Debes ingresar datos completos");
    
  }

  if(imc2 <= 18.5){ resp.innerHTML = "Por debajo del peso";}
    else if(imc2 >= 18.5 && imc2 <= 24.9){ resp.innerHTML = "Saludable";}
    else if(imc2 >= 25 && imc2 <= 29.9){ resp.innerHTML = "Con sobrepeso";}
    else if(imc2 >= 30 && imc2 <= 39.9){ resp.innerHTML = "Obeso";}
    else if(imc2 > 40){resp.innerHTML = "Obesidad extrema o de alto riesgo";}
    else{
      alert("Debes ingresar tus datos correctamente", IMC.innerHTML = "", resp.innerHTML = "");
    }
      localStorage.setItem('genero',s);
      localStorage.setItem('peso',kg);
      localStorage.setItem('Altura',m);
      localStorage.setItem('IMC',imc2);
      ObtenerLocalStorage();
  }

function ObtenerLocalStorage(){

  let genero = localStorage.getItem('genero');
  let peso = localStorage.getItem('peso');
  let altura = localStorage.getItem('Altura');
  let mensaje = localStorage.getItem('IMC');
  alert(`La información almacenada es 
  ${genero}
  ${peso}
  ${altura}
  ${mensaje}
  `)  }


  
  



