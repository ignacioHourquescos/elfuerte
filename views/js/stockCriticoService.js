// Al finalizarse de cargar el DOM:
var server ="https://renovaapi.herokuapp.com";
//var server ="http://localhost:5000";


function obtenerListaArticulosBajoStock () {
	$(document).ready($.getJSON(server+"/stock", function (data) { 
		for(i=0; i<data.length;i++){
			let unidadesVendidasPorMes= data[i].unidades*1.3;
			console.log(unidadesVendidasPorMes);
			if (data[i].cant_stock==0){
				data[i].cant_stock=0;
			}
			data[i].stockCritico=unidadesVendidasPorMes/data[i].cant_stock;
			// let ventaMensual[i]=data.resultado[i].unidades*1.30;
			// let ratioStock=(data.resultado[i].unidades.toFixed(0);
			// data.resultado[i].pf="$"+precioConIva;
			// data.resultado[i].p="$"+data.resultado[i].p.toFixed(0);
			// data.resultado[i].s=convertirStockNumericoEnEscala(data.resultado[i].s);
		}		
	 $('table').bootstrapTable({ 
		data:data
		}); 
	}));
}

obtenerListaArticulosBajoStock();


// "articulo": "4100/5",
// "descrip_arti": "4100 TURBOLIGHT 10W40 5L",
// "UM": "D34",
// "unidades": 39,
// "cant_stock": -1,
// "stockCritico": -40

