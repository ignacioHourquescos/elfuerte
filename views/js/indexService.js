const constantes = {


    nosotros: "  En el año 1967 abrimos una pequeña galletiteria, con los años nos orientamos hacia el rubro de dietéticas, \
    estableciendo contacto con proveedores e importadores. Eso nos llevó a abrir sucursales y \
    crear nuestra distribuidora mayorista. Somos EL FUERTE atendemos dieteticas, gastronomicos,\
     panaderías y a revendedores, en CABA, gran Buenos Aires y en el interior del país.",


    tituloServicios1: "MAYORISTA DE FRUTAS SECAS Y PRODUCTOS PARA DIETËTICAS",
    descServicios1: "Amplio súrtido de productos nacionales e importados. Entrega en Capital Federal y Gran Buenos Aires. Entregas al interior via encomienda. Acceda a nuestra lista de precios",

    tituloServicios2: "ASESORAMIENTO",
    descServicios2: "Ofrecemos asesoramiento y facilidades para quien desee abrir una dietética. Cálculos orientativosde estructura de costos para dar los primeros pasos.",

    asesoramiento: "Te ayudamos a entender el negocio de la dietetica. Te asesoramos con la compra inicial y con los factores claves a tener en cuenta."

}

 //WHATSAPP FUNCTION
			$(function () {
        $('#WAButton').floatingWhatsApp({
          phone: '5491150007242', //WhatsApp Business phone number
           //headerTitle: 'Escribinos!', //Popup Title
          //popupMessage: 'Hola! en que te podemos ayudar?', //Popup Message
          showPopup: false, //Enables popup display
          buttonImage: '<img src="views/images/whatsappModern.png" />', //Button Image
          //headerColor: 'crimson', //Custom header color
          //backgroundColor: 'crimson', //Custom background button color
          position: "right" //Position: left | right
   
        });
      })

// FUNCTION

function inserstartextos(id,element){
  document.getElementById(id).innerHTML=element;
}


inserstartextos("Nosotros",         constantes.nosotros);
// inserstartextos("tituloServicios1", constantes.tituloServicios1);
// inserstartextos("descServicios1",   constantes.descServicios1);
// inserstartextos("tituloServicios2", constantes.tituloServicios2);
// inserstartextos("descServicios2",   constantes.descServicios2);
inserstartextos("Asesoramiento", constantes.asesoramiento);
// inserstartextos("tituloServicios3", constantes.tituloServicios3);
// inserstartextos("descServicios3",   constantes.descServicios3);
// inserstartextos("tituloServicios4", constantes.tituloServicios4);
// inserstartextos("descServicios4",   constantes.descServicios4);



window.onload = wpp();


