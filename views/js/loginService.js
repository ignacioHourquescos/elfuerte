
function agarrarContraseña(){  
    var password=document.getElementById("password").value
    if (password.length>=11 || password=="elfuerte"){
        document.getElementById("formularioLogin").action="./listas.html";
    }else{
        alert("Contraseña incorrecta");
        return false;
    }
}


  