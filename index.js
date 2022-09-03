function montaPadrao () {
    
    let checkLetras = document.querySelector(".checkbox-letras").checked;
    let checkLetrasCA = document.querySelector(".checkbox-letrasCA").checked;
    let checkNumeros = document.querySelector(".checkbox-numeros").checked;
    let checkSimbolos = document.querySelector(".checkbox-simbolos").checked;
    console.log (checkLetras, checkLetrasCA, checkNumeros, checkSimbolos)
    let letras = "abcdefghijklmnopqrstuvwxyz";
    let letrasCA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numeros = "1234567890";
    let simbolos = "!@#$%¨&*()";
    var caracteres = "";
    
    if (checkLetras == 1) {
        caracteres += letras
    }
    if (checkLetrasCA == 1) {
        caracteres += letrasCA
    }
    if (checkNumeros == 1) {
        caracteres += numeros
    }
    if (checkSimbolos == 1) {
        caracteres += simbolos
    }
    if (checkLetras == 0 && checkLetrasCA == 0 && checkNumeros == 0 && checkSimbolos == 0) {
        alert("Selecione uma Caixa");
    }
    console.log(caracteres)
    return caracteres; 
}

var button = document.querySelector("button");
var input = document.querySelector(".css-input");


button.addEventListener("click", function(e) {
    document.querySelector(".resposta").classList.add("resposta-on")
    e.preventDefault();
    let caracteres = montaPadrao();
    var senha = ""; 
    const numeroDigitos = input.value;
    if (numeroDigitos > 16) {
        alert("A sua senha deve ter menos de 16 caracteres");
    }
    else if (numeroDigitos < 4) {
        alert("Sua senha deve ter mais de 4 caracteres")
    }
    else {    
    
    for (var i = 0; i<numeroDigitos; i++) {
        numeroRandom = Math.floor(Math.random()*caracteres.length)+1;
        senha = senha + caracteres.substring(numeroRandom-1, numeroRandom );
    }

    var suaSenha = document.querySelector("h2");
    
    suaSenha.innerHTML = "Sua senha: " + senha

}

});
