
function agarrarContraseña(){  
    var password=document.getElementById("password").value
    if (password.length>=10){
        document.getElementById("formularioLogin").action="./listas.html";
    }else{
        alert("Contraseña incorrecta");
        return false;
    }
}


  