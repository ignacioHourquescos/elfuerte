// Al finalizarse de cargar el DOM:
//var port = process.env.PORT || 8080;
var server ="https://renovaapi.herokuapp.com";
//var server ="http://localhost:5000";





function cargarOfertasMensuales () {
	//busca en el backend todas las ofertas
	$.getJSON(server+"/ofertasMensuales", function (data) {
		for (i = 0; i < data.length; i++) {
			var divCompetencia = $(".oferta").clone().removeClass("oferta");
    	  	$(divCompetencia).find('.titulo').text(data[i].id);
			  $(divCompetencia).find('.detalle').text(data[i].d);
			  if(data[i].p<100){
				$(divCompetencia).find('.precio').html('<a id="irALista" href="listaEspecifica2.html?id='+data[i].p+'"><h1>Ir a Lista</h1></a>');
			  }else{
				$(divCompetencia).find('.precio').text("$"+(data[i].p*1.21).toFixed(0));
			  }
			$(divCompetencia).find('.imagenOferta').attr("src",data[i].img);
    	  	$(".ofertas").append(divCompetencia);
		};
		$("#plantilla").remove();
	});

}

function cargarOfertasFram () {
	//busca en el backend todas las ofertas
	$.getJSON(server+"/ofertasFram", function (data) {
		for (i = 0; i < data.length; i++) {
			var divCompetencia = $(".ofertaFiltro").clone().removeClass("ofertaFiltro");
    	  	$(divCompetencia).find('.titulo').text(data[i].id);
		  	$(divCompetencia).find('.detalle').text(data[i].d);
			$(divCompetencia).find('.precio').text("$"+(data[i].p*1.21).toFixed(0));
			$(divCompetencia).find('.imagenKit').attr("src",data[i].img);
    	  	$(".ofertaFiltros").append(divCompetencia);
		};
		$("#plantilla7").remove();
		$(".spinner-border").remove();
	});
}


function cargarKits () {
	//busca en el backend todas las ofertas
	$.getJSON(server+"/ofertasKits", function (data) {
		for (i = 0; i < data.length; i++) {
			var divCompetencia = $(".kit").clone().removeClass("kit");
    	  	$(divCompetencia).find('.titulo').text(data[i].id);
		  	$(divCompetencia).find('.detalle').text(data[i].d);
			$(divCompetencia).find('.precio').text("$"+(data[i].p*1.21).toFixed(0));
			$(divCompetencia).find('.imagenKit').attr("src",data[i].img);
    	  	$(".kits").append(divCompetencia);
		};
		$("#plantilla2").remove();
		$(".spinner-border").remove();
	});
}

function cargarValvoline () {
	//busca en el backend todas las ofertas
	$.getJSON(server+"/ofertasValvoline", function (data) {
		for (i = 0; i < data.length; i++) {
			var divCompetencia = $(".valvoline").clone().removeClass("valvoline");
    	  	$(divCompetencia).find('.titulo').text(data[i].id);
		  	$(divCompetencia).find('.detalle').text(data[i].d);
			$(divCompetencia).find('.precio').text("$"+(data[i].p*1.21*0.9).toFixed(0));
			$(divCompetencia).find('.imagenKit').attr("src",data[i].img);
    	  	$(".valvolineOfertas").append(divCompetencia);
		};
		$("#plantilla3").remove();
	});
}


function cargarMotul() {
	//busca en el backend todas las ofertas
	$.getJSON(server+"/ofertasMotul", function (data) {
		for (i = 0; i < data.length; i++) {
			var divCompetencia = $(".motul").clone().removeClass("motul");
    	  	$(divCompetencia).find('.titulo').text(data[i].id);
		  	$(divCompetencia).find('.detalle').text(data[i].d);
			$(divCompetencia).find('.precio').text("$"+(data[i].p*1.21*0.9).toFixed(0));
			$(divCompetencia).find('.imagenKit').attr("src",data[i].img);
    	  	$(".motulOfertas").append(divCompetencia);
		};
		$("#plantilla4").remove();
	});
}


function cargarTotal() {
	//busca en el backend todas las ofertas
	$.getJSON(server+"/ofertasTotal", function (data) {
		for (i = 0; i < data.length; i++) {
			var divCompetencia = $(".total").clone().removeClass("total");
    	  	$(divCompetencia).find('.titulo').text(data[i].id);
		  	$(divCompetencia).find('.detalle').text(data[i].d);
			$(divCompetencia).find('.precio').text("$"+(data[i].p*1.21*0.9).toFixed(0));
			$(divCompetencia).find('.imagenKit').attr("src",data[i].img);
    	  	$(".totalOfertas").append(divCompetencia);
		};
		$("#plantilla5").remove();
	});
}


function cargarSelenia() {
	//busca en el backend todas las ofertas
	$.getJSON(server+"/ofertasSelenia", function (data) {
		for (i = 0; i < data.length; i++) {
			var divCompetencia = $(".selenia").clone().removeClass("selenia");
    	  	$(divCompetencia).find('.titulo').text(data[i].id);
		  	$(divCompetencia).find('.detalle').text(data[i].d);
			$(divCompetencia).find('.precio').text("$"+(data[i].p*1.21*0.9).toFixed(0));
			$(divCompetencia).find('.imagenKit').attr("src",data[i].img);
    	  	$(".seleniaOfertas").append(divCompetencia);
		};
		$("#plantilla6").remove();
	});
}



cargarOfertasFram();
cargarKits(); 
cargarValvoline();
cargarMotul();
cargarTotal();
cargarSelenia();
cargarOfertasMensuales();