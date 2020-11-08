


document.getElementById("select").addEventListener("click", function() {

    obtenerListaEspecifica();
});


 function obtenerListaEspecifica () {
 	$.getJSON('https://spreadsheets.google.com/feeds/list/1oEIH4yWEVMNmJOENvGau2Le9hGssFQss6RiFp7_EzFU/1/public/values?alt=json', function (data) {       
        var categoria_filtrada=document.getElementById("select").value;
        var dataFiltrada=data.feed.entry;
        var dataFiltrada2;
        if(categoria_filtrada=="Todas las Categorias"){
            dataFiltrada2=dataFiltrada;
        }else{
            dataFiltrada2 = dataFiltrada.filter(function(producto) {
                return producto.gsx$categoria.$t == categoria_filtrada;
            });
        }
        $('table').bootstrapTable('destroy');
        $('table').bootstrapTable({ 
            data: dataFiltrada2,
        }); 

        // $('table').bootstrapTable('destroy');
        $('table').bootstrapTable({ 
            data: data,
        }); 
        
    });
    
}

// var first = document.createElement("H1");

// $( document ).ready(function() {
//     document.querySelector(".fixed-table-toolbar").appendChild(first);
// });

// fixed-table-toolbar
// fixed-table-toolbar
 obtenerListaEspecifica();

