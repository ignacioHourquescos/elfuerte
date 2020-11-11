


document.getElementById("select").addEventListener("click", function() {

    obtenerListaEspecifica();
});


function obtenerListaEspecifica () {
  $.getJSON('https://spreadsheets.google.com/feeds/list/1oEIH4yWEVMNmJOENvGau2Le9hGssFQss6RiFp7_EzFU/1/public/values?alt=json', function (data) {       
       var categoria_filtrada=document.getElementById("select").value;
       var dataFiltrada=data.feed.entry;
       var array=[];
       for (var i=0;i<dataFiltrada.length;i++){
        array.push({
         "codi":dataFiltrada[i].gsx$codigo.$t,
         "desc":dataFiltrada[i].gsx$descripcion.$t,
         "pres":dataFiltrada[i].gsx$presentacion.$t,
         "cate":dataFiltrada[i].gsx$categoria.$t,
         "prec":dataFiltrada[i].gsx$precio.$t,
         "orig":dataFiltrada[i].gsx$origen.$t,
        "desc2":dataFiltrada[i].gsx$desc2.$t,
         });  
       }
      
       if(categoria_filtrada=="Todas las Categorias"){
          array=array;
        }
       else{
         array = array.filter(function(producto) {
               return producto.cate == categoria_filtrada;
           });
       }
       $('table').bootstrapTable('destroy');
       $('table').bootstrapTable({ 
           data: array,
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
      swal(JSON.stringify(row.desc2) )
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



////////////////SCROLLER A LA PALABRA


