$('.carousel').carousel({
    interval: 2500,
    pause:"hover"
  })

  const constantes ={
    nosotros: 
  
    "En el año 1967 abrimos una pequeña galletitería en el corazón de Villa Urquiza. \
  Con el pasar de los años nos fuimos adaptando a los cambios en la demanda\
     siendo hoy una dietética. En nuestra historia fuimos estableciendo contacto con diferentes productores e importadores, \
     lo cual nos llevó a montar nuestra propia distribuidora, El Fuerte. \
     Aparte de proveer a Casa Coquito, abastecemos a diferentes comercios y dietéticas en todo el país.",
  
    tituloServicios1:
    "CAPITAL INICIAL",
    descServicios1: 
  "Estimación aproximada de inversión inicial. Desde de piso minimo viable para la puesta en marcha, \
  a las diferentes escalas que existen en la apertura de una dietética ",
    
  tituloServicios2:
  "PROVEEDORES",
  descServicios2:
  "Te facilitamos una lista de proveedores, accediendo así a un amplio surtido y a los mejores precios\
  Con mas de 40 años en el rubro conocemos un listado de proveedores que se complementan con los productos\
  claves de una dietetica",
    
  tituloServicios3:
  "COMPRAS",
  descServicios3:
  "Te asesoramos en la compra inicial, para tener el stock adecuado de cada producto. El stock adecuado \
  en una dietética dependerá de la demanda la cual registra un pico en los meses de frío, \
  mientras que en el verano baja levemente.",
  
  tituloServicios4:
  "LOCAL Y MOBILIARIO",
  descServicios4:
  "Te ayudamos en el diseño del local, estética y mobiliario. Desde los recipientes para contener los productos\
  hasta el diseño integral de los muebles en diferentes estilos.",

  tituloServicios5:
  "ESTACIONALIDAD DE LA DEMANDA",
  descServicios5:
  "El pico de demanda se registra en los meses de frío, mientras que en el verano la demanda baja levemente.\
  De todas maneras hoy en dia se puede existen productos alterniativos que no dependen tanto de la estación ",

  tituloServicios6:
  "CONSERVACION DE LA MERCADERIA",
  descServicios6:
  "Los frutos secos, semillas y cerelaes deben ser conservados a temperaturas menores a los 22C°. Este factor es sumamente \
  tenerlo en cuenta en el verano, ya que si no podremos vender mercadería en mal estado.",
  
  }
  

  
  function inserstartextos(id,element){
    document.getElementById(id).innerHTML=element;
  }
  
  

  inserstartextos("tituloServicios1", constantes.tituloServicios1);
  inserstartextos("descServicios1",   constantes.descServicios1);
  inserstartextos("tituloServicios2", constantes.tituloServicios2);
  inserstartextos("descServicios2",   constantes.descServicios2);
  inserstartextos("tituloServicios3", constantes.tituloServicios3);
  inserstartextos("descServicios3",   constantes.descServicios3);
  inserstartextos("tituloServicios4", constantes.tituloServicios4);
  inserstartextos("descServicios4",   constantes.descServicios4);
  inserstartextos("tituloServicios5", constantes.tituloServicios5);
  inserstartextos("descServicios5",   constantes.descServicios5);
  inserstartextos("tituloServicios6", constantes.tituloServicios6);
  inserstartextos("descServicios6",   constantes.descServicios6);
  
  

  
  
  