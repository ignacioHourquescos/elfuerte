
function agarrarContraseña(){  
    var password=document.getElementById("password").value
    if (password=="elfuerte"||password==2522){
        document.getElementById("formularioLogin").action="./listas.html";
    }else{
        alert("Contraseña incorrecta");
        return false;
    }
}


  