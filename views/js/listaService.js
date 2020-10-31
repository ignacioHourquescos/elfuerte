
// var mydata = [
//     {
//         "id": 0,
//         "no": "test0",
//         "ps": "$0",
//         "pc": "$100",
//         "or": "turquia"
//     }
// ];


// document.getElementById("myTable").bootstrapTable({
//     data: mydata
// });





 function obtenerListaEspecifica () {
 	$(document).ready($.getJSON('https://spreadsheets.google.com/feeds/list/1oEIH4yWEVMNmJOENvGau2Le9hGssFQss6RiFp7_EzFU/1/public/values?alt=json', function (data) {       
  
        var dataFiltrada=data.feed.entry;
        console.log(dataFiltrada[0].gsx$categoria.$t);
        console.log(dataFiltrada);
        $('table').bootstrapTable({ 
            data: dataFiltrada,
        }); 
    }));
   
}
 
 obtenerListaEspecifica();


//  data.feed.entry[i].gsx$codigo.$t,
//  data.feed.entry[i].gsx$descripcion.$t,
//  data.feed.entry[i].gsx$precio.$t,
//  data.feed.entry[i].gsx$presentacion.$t,
//  data.feed.entry[i].gsx$origen.$t,  


// $('#filterBy').click(function () {
//     var filterAlgorithm = $('[name="filterAlgorithm"]').val()

//     $table.bootstrapTable('refreshOptions', {
//       filterOptions: {
//         filterAlgorithm: filterAlgorithm
//       }
//     })

//     $table.bootstrapTable('filterBy', {
//         gsx$categoria.$t:filterAlgorithm
//     })
//   })