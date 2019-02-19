
 // La función muestra el menú para elegir operación y genera 6 números aleatorios entre 0 y 10 y comprueba que la respuesta del usuario sea correcta y saca las variables de la funcion

function elegirOperacion(){
	document.body.innerHTML = "<div class='d-flex flex-column'><div>Elige una operación</div><div><button onclick='verSuma()'>Sumar</button><button onclick='verMultiplicacion()'>Multiplicar</button></div></div>";
	document.body.style.background = "none";
	puntos = 0;
	n1 = Math.floor((Math.random() * 10) + 1);
	n2 = Math.floor((Math.random() * 10) + 1);
	n3 = Math.floor((Math.random() * 10) + 1);
	n4 = Math.floor((Math.random() * 10) + 1);
	n5 = Math.floor((Math.random() * 10) + 1);
	n6 = Math.floor((Math.random() * 10) + 1);
/*
for (i = 1; i < 6; i++) {
  n+(i) = Math.floor((Math.random() * 10) + 1);
}
*/
	return puntos, n1, n2, n3, n4, n5, n6;
}
 // Cambia el contenido del body y muestra las variables, cuentas e input y cambia la función del botón de "Comprobar"
function verSuma(){
	document.body.innerHTML = "<div class='d-flex flex-column text-center'><div>" + n1 + " + " + n2 + " = <input type='text' id='n12'/></div><div>" + n3 + " + " + n4 + " = <input type='text' id='n34'/></div><div>" + n5 + " + " + n6 + " = <input type='text' id='n56'/></div><button id='sumar' onclick='sumar()'>Comprobar</button><button id='repetir' onclick='elegirOperacion()'>Repetir</button></div>";
}

 // Cambia el contenido del body y muestra las variables, cuentas e input y cambia la función del botón de "Comprobar"
function verMultiplicacion(){
	document.body.innerHTML = "<div class='d-flex flex-column text-center'><div>" + n1 + " * " + n2 + " = <input type='text' id='n12'/></div><div>" + n3 + " * " + n4 + " = <input type='text' id='n34'/></div><div>" + n5 + " * " + n6 + " = <input type='text' id='n56'/></div><button id='multiplicar' onclick='multiplicar()'>Comprobar</button><button id='repetir' onclick='elegirOperacion()'>Repetir</button>";
}

function sumar(){
	 // Obtiene los valores de los inputs y los guarda en 3 variables
	n12 = document.getElementById("n12").value;
	n34 = document.getElementById("n34").value;
	n56 = document.getElementById("n56").value;
	// Si la suma de los dos primeros números es correcta, entonces suma 10 puntos
	if ((n1 + n2) == n12) {
		puntos = puntos + 10;
	}
	// Si la suma del tercer y cuarto números es correcta, entonces suma 10 puntos
	if((n3 + n4) == n34){
		puntos = puntos + 10;
	}
	// Si la suma del quinto y sexto números es correcta, entonces suma 10 puntos
	if((n5 + n6) == n56){
		puntos = puntos + 10;
	}
	// Si el usuario tiene 0 puntos que le de una respuesta, si tiene 30 puntos, otra distinta y cambie el fondo, y si tiene cualqueir otro valor (10 o 20) que ponga otro
	switch(puntos) {
	  case 0:
	    msg = "Hay que practicar más";
	    break;
	  case 30:
	    msg = "Muchísimas felicidades";
	    document.body.style.backgroundImage = "url(https://images3.alphacoders.com/219/219087.jpg)";
	    break;
	  default:
	    msg = "Felicidades";
	}
	 // Se desactiva el botón que comprueba el resultado para evitar que se sigan sumando puntos y superen los 30
	document.getElementById("sumar").disabled = true;
	 // Se muestra el resueltado
	alert(puntos + " " + msg)

}

function multiplicar(){
	n12 = document.getElementById("n12").value;
	n34 = document.getElementById("n34").value;
	n56 = document.getElementById("n56").value;
	if ((n1 * n2) == n12) {
		puntos = puntos + 10;
	}
	if((n3 * n4) == n34){
		puntos = puntos + 10;
	}
	if((n5 * n6) == n56){
		puntos = puntos + 10;
	}
	switch(puntos) {
	  case 0:
	    msg = "Hay que practicar más";
	    break;
	  case 30:
	    msg = "Muchísimas felicidades";
	    document.body.style.backgroundImage = "url(https://images3.alphacoders.com/219/219087.jpg)";
	    break;
	  default:
	    msg = "Felicidades";
	}
	 // Se desactiva el botón que comprueba el resultado para evitar que se sigan sumando puntos y superen los 30
	document.getElementById("multiplicar").disabled = true;
	alert(puntos + " " + msg)

}