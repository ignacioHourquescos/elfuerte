


document.getElementById("select").addEventListener("click", function() {

    obtenerListaEspecifica();
});


 function obtenerListaEspecifica () {
 	$.getJSON('https://spreadsheets.google.com/feeds/list/1oEIH4yWEVMNmJOENvGau2Le9hGssFQss6RiFp7_EzFU/1/public/values?alt=json', function (data) {       
        var categoria_filtrada=document.getElementById("select").value;
        var dataFiltrada=data.feed.entry;
        console.log(dataFiltrada);
        var dataFiltrada2;
        if(categoria_filtrada=="Todas las Categorias"){dataFiltrada2=dataFiltrada;}
        else{dataFiltrada2 = dataFiltrada.filter(function(producto) {
                return producto.gsx$categoria.$t == categoria_filtrada;
            });
        }
        $('table').bootstrapTable('destroy');
        $('table').bootstrapTable({ 
            data: dataFiltrada2,
        }); 

        // $('table').bootstrapTable('destroy');
        // $('table').bootstrapTable({ 
        //     data: data,
        // }); 
        
    });
    
}






function operateFormatter(value, row, index) {
    return [
     
      '</a>  ',
      '<a class="like" href="javascript:void(0)" title="Remove">',
      '<i class="fa fa-info-circle"></i>',

      '</a>'
    ].join('')
  }

  window.operateEvents = {
    'click .like': function (e, value, row, index) {
      alert( "Descirpcion Adicional: " + JSON.stringify(row.gsx$categoria.$t) + " de " + JSON.stringify(row.gsx$origen.$t) )
    },
    'click .remove': function (e, value, row, index) {
      $table.bootstrapTable('remove', {
        field: 'id',
        values: [row.id]
      })
    }
  }

 obtenerListaEspecifica();

//escondo table header cuando es un celular, y si es en PC lo muestro
if (window.matchMedia("(max-width: 600px)").matches) {
  console.log("menos de 400px");
  document.getElementById("myTable").removeAttribute("data-show-header");
	
} else {
	console.log("mas de 400px");
	document.getElementById("myTable").removeAttribute("data-show-header");
}

