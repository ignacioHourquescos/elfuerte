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
  "LOCAL",
  descServicios4:
  "La ubicación es un factor clave a tener en cuenta cuando pensamos en abrir una dietética. Esto determinará\
  que tipo de productos debemos comercializar y y el flujo de gente que entre al local.",
  
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
  
  
  

  
  
  