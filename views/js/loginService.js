
function agarrarContraseña(){  
    var password=document.getElementById("password").value
    if (password.length>=10){
        document.getElementById("formularioLogin").action="./ofertas.html";
    }else{
        alert("CUIT invalido");
        return false;
    }
}


  