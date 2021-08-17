"use strict";

document.getElementById("select").addEventListener("click", function () {
  obtenerListaEspecifica();
});

function obtenerListaEspecifica() {
  $.getJSON('https://spreadsheets.google.com/feeds/list/1JIm_6mWe8rJ3yTDX88LMUhKQkzGn9xvUpcMs15fJNSc/1/public/values?alt=json', function (data) {
    var categoria_filtrada = document.getElementById("select").value;
    var data = data.feed.entry;
    var array = [];

    for (var i = 0; i < data.length; i++) {
      var lastUpdate = convertirFecha(data[i].gsx$fecha.$t);

      if (lastUpdate == false) {
        array.push({
          "codi": data[i].gsx$codigo.$t,
          "desc": data[i].gsx$descripcion.$t,
          "pres": data[i].gsx$presentacion.$t,
          "cate": data[i].gsx$categoria.$t,
          "prec": '$' + parseInt(data[i].gsx$precio.$t),
          "orig": data[i].gsx$origen.$t,
          "desc2": data[i].gsx$desc2.$t,
          "fecha": lastUpdate
        });
      } else if (window.matchMedia("(max-width: 600px)").matches) {
        array.push({
          "codi": data[i].gsx$codigo.$t,
          "desc": data[i].gsx$descripcion.$t + false ? "<span style='margin:1rem;color:green; border:1px solid red;background-color:#fdc3c3bf; border-radius:1000px; padding:0 0.5rem;'>modificado</span>" : "<span style='margin:1rem;color:green; border:1px solid red;background-color:#00FFFF; border-radius:1000px; padding:0 0.5rem;'>modificado</span>",
          "pres": data[i].gsx$presentacion.$t,
          "cate": data[i].gsx$categoria.$t,
          "prec": '$' + parseInt(data[i].gsx$precio.$t),
          "orig": data[i].gsx$origen.$t,
          "desc2": data[i].gsx$desc2.$t,
          "fecha": lastUpdate
        });
      } else {
        array.push({
          "codi": data[i].gsx$codigo.$t,
          "desc": data[i].gsx$descripcion.$t + "&nbsp<span style='color:red; border:1px solid red;background-color:#fdc3c3bf; border-radius:100px; padding:0 0.5rem;'>Modificado esta semana</span>",
          "pres": data[i].gsx$presentacion.$t,
          "cate": data[i].gsx$categoria.$t,
          "prec": '$' + parseInt(data[i].gsx$precio.$t),
          "orig": data[i].gsx$origen.$t,
          "desc2": data[i].gsx$desc2.$t,
          "fecha": lastUpdate
        });
      }
    }

    if (categoria_filtrada == "Todas las Categorias") {
      array = array;
    } else {
      array = array.filter(function (producto) {
        return producto.cate == categoria_filtrada;
      });
    }

    $('table').bootstrapTable('destroy');
    $('table').bootstrapTable({
      data: array
    });
  });
}

function operateFormatter(value, row, index) {
  if (row.desc2 == "") {
    return ['</a>  ', '<p style="color:#e8e8e8;">Sin detalle</p>', '</a>'].join('');
  } else {
    return ['</a>  ', '<a class="like" href="javascript:void(0)" title="Remove">', "<p style=\"color:grey;\">".concat(row.desc2.substring(0, 20), "...</p>"), '</a>'].join('');
  }
}

window.operateEvents = {
  'click .like': function clickLike(e, value, row, index) {
    if (row.desc2 == "") {
      swal(JSON.stringify(row.desc));
    } else {
      swal(JSON.stringify(row.desc2));
    }
  },
  'click .remove': function clickRemove(e, value, row, index) {
    $table.bootstrapTable('remove', {
      field: 'id',
      values: [row.id]
    });
  }
};
obtenerListaEspecifica(); //escondo table header cuando es un celular, y si es en PC lo muestro

if (window.matchMedia("(max-width: 600px)").matches) {
  document.getElementById("myTable").removeAttribute("data-show-header");
} else {
  document.getElementById("myTable").removeAttribute("data-show-header");
} //////////////// HANDLER DE FECHAS


var convertirFecha = function convertirFecha(fecha) {
  var dateParts = fecha.split("/");
  var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
  var diffDays = Math.ceil(Math.abs(new Date() - dateObject) / (1000 * 60 * 60 * 24));

  if (diffDays < 7) {
    return true;
  } else return false;
};