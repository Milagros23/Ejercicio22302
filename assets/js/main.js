var arr=[ { nombre : "Arabela",   apellido : "Rojas",     rol : "T.A",        cumpleaños : "23 de enero" },
	          { nombre : "Michelle",  apellido : "Seguil",    rol : "T.A",        cumpleaños : "25 de noviembre" },
	          { nombre : "Meche",     apellido : "Zubieta",   rol : "T.A",        cumpleaños : "02 de marzo" },
	          { nombre : "Papu",      apellido : "Rivariola", rol : "Psicóloga",  cumpleaños : "10 de octubre" },
	          { nombre : "Gian",      apellido : "Corzo",     rol : "Profesor",   cumpleaños : "23 de enero" } ];


	var mensaje="";

	function imprimir(){
	  for (var a in arr) {
	    mensaje +=   "Nombre:"   + arr[a].nombre + "<br>" +
	                 "Apellido:" + arr[a].apellido    + "<br>" +
	                  "Rol:" + arr[a].rol + "<br>"+
	                   "Cumpleaños:" + arr[a].cumpleaños + "<br>" + "<br>";

	  }
	  document.getElementById('datos').innerHTML=mensaje;

	}
