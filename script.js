console.log("Calculadora funcionando ")

function somar(){
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = document.getElementById('resultado').value = numero1 + numero2;
}

function subtrair(){
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = document.getElementById('resultado').value = numero1 - numero2;
}

function multiplicar(){
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = document.getElementById('resultado').value = numero1 * numero2;
}

function dividir(){
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = document.getElementById('resultado').value = numero1 / numero2;
}

function ac(){
    const numero1 = parseFloat(document.getElementById('numero1').value= 0);
    const numero2 = parseFloat(document.getElementById("numero2").value = 0);
    const resultado = document.getElementById('resultado').value=0;
}