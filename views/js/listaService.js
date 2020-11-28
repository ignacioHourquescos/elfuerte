


document.getElementById("select").addEventListener("click", function() {

    obtenerListaEspecifica();
});


function obtenerListaEspecifica () {
  $.getJSON('https://spreadsheets.google.com/feeds/list/1JIm_6mWe8rJ3yTDX88LMUhKQkzGn9xvUpcMs15fJNSc/1/public/values?alt=json', function (data) {       
       var categoria_filtrada=document.getElementById("select").value;
       var data=data.feed.entry;
       var array=[];



       for (var i=0;i<data.length;i++){
        var lastUpdate = convertirFecha(data[i].gsx$fecha.$t);
        array.push({
         "codi":data[i].gsx$codigo.$t,
         "desc":data[i].gsx$descripcion.$t,
         "pres":data[i].gsx$presentacion.$t,
         "cate":data[i].gsx$categoria.$t,
         "fecha":lastUpdate,
         "prec":data[i].gsx$precio.$t,
         "orig":data[i].gsx$origen.$t,
        "desc2":data[i].gsx$desc2.$t,
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
      '<i class="fa fa-info-circle" style="color:grey;"></i>',

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
  document.getElementById("myTable").removeAttribute("data-show-header");
	
} else {
	document.getElementById("myTable").removeAttribute("data-show-header");
}



//////////////// HANDLER DE FECHAS
const convertirFecha = (fecha) => {
  var dateParts = fecha.split("/");
  var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
  const diffDays = Math.ceil(Math.abs(new Date() - dateObject) / (1000 * 60 * 60 * 24)); 
  if (diffDays<7)
    return ['<i class="fa fa-circle" style="color:red"></i>']
  else
    return ("")  

}


// function rowStyle(row, index) {
//   console.log(index);
//   var classes = [

//     'bg-red'
//   ]

//   if (index % 2 === 0) {
//     return {
//       classes: classes[0]
//     }
//   }
//   return {
    
//   }
// }


$( document ).ready(function() {
  var fecha = document.getElementById("fecha");
  if (fecha=="Esta semana") {
    console.log("Algo estamos avanzando");
  }

});