var op=0; //operacion pendiente
var ac=0;  //Acumulado
var borrado='';
var num1;
var num2;
var pantalla="0";
var i=0;
var error=false;
var punto=false;
var acumulados=0;
var ac_x=0;
var ac_y=0;
var ac_z=0;
//limitar maximo numero de digitos ingresados y en acumulador
function botones(){	
	document.getElementById('ac_x').addEventListener('click', function(){acpantalla(1);}, false);
	document.getElementById('ac_y').addEventListener('click', function(){acpantalla(2);}, false)
	document.getElementById('ac_z').addEventListener('click', function(){acpantalla(3);}, false)
	//document.getElementById("pantalla").appendChild(node).addEventListener('click', show, false);
	document.getElementById('acumulador').addEventListener('click', acumulador, false);
	document.getElementById('n1').addEventListener('click', function(){concatenar(1);}, false);
	document.getElementById('n2').addEventListener('click', function(){concatenar(2);}, false);
	document.getElementById('n3').addEventListener('click', function(){concatenar(3);}, false);
	document.getElementById('n4').addEventListener('click', function(){concatenar(4);}, false);
	document.getElementById('n5').addEventListener('click', function(){concatenar(5);}, false);
	document.getElementById('n6').addEventListener('click', function(){concatenar(6);}, false);
	document.getElementById('n7').addEventListener('click', function(){concatenar(7);}, false);
	document.getElementById('n8').addEventListener('click', function(){concatenar(8);}, false);
	document.getElementById('n9').addEventListener('click', function(){concatenar(9);}, false);
	document.getElementById('n0').addEventListener('click', function(){concatenar(0);}, false);
			//operaciones
	document.getElementById('suma').addEventListener('click', function(){operaciones(1);}, false);
	document.getElementById('resta').addEventListener('click', function(){operaciones(2);}, false);
	document.getElementById('multiplicacion').addEventListener('click', function(){operaciones(3);}, false);
	document.getElementById('divicion').addEventListener('click', function(){operaciones(4);}, false);
			//otros
	document.getElementById('.').addEventListener('click', addpunto, false);
	document.getElementById('=').addEventListener('click', function(){operaciones(0);} , false);
	document.getElementById('limpiar').addEventListener('click', limpiar, false);
	document.getElementById('borrarlast').addEventListener('click', borrarlast, false);
			//acumular
	//document.getElementById('variable').addEventListener('click', addvariable, false);
}
function show(){
	alert(pantalla)
}
function concatenar(numero){	
	if(pantalla.length<=19){
	if(pantalla=="0"){
		pantalla="";
	}
	var num1=pantalla;
	var num2=numero;
	pantalla=num1.concat(num2);
	var e=document.getElementById('pantalla');
	e.innerHTML=pantalla;
	color=false;
	document.getElementById("suma").style.background='URL("img/boton.png")';
	document.getElementById("resta").style.backgroundImage='URL("img/boton.png")';
	document.getElementById("multiplicacion").style.background='URL("img/boton.png")';
	document.getElementById("divicion").style.background='URL("img/boton.png")';
	}
}	
function operaciones(operacion){
	seleccionado(operacion);
	if(color==false){
	if(i==0){
		ac=pantalla
	}else{
		switch(op){
		case 1: ac=parseFloat(ac)+parseFloat(pantalla);
		break
		case 2: ac=parseFloat(ac)-parseFloat(pantalla);
		break
		case 3: ac=parseFloat(ac)*parseFloat(pantalla);
		break
		case 4: if(pantalla==0 && i==0){
				pantalla=1;
				}else{
				ac=parseFloat(ac)/parseFloat(pantalla);
				if(pantalla==0 || ac==0){
				error=true;
				}	
				}
		break
	}
	}
	}
	i++;
	punto=false;
	var e=document.getElementById('pantalla');
	if(error==true){
		ac="ERROR";
	}
	e.innerHTML=ac;	
	pantalla="0";
	op=operacion
	color=true;	
}

function seleccionado(operacion){
	switch(operacion){
		case 1: document.getElementById("suma").style.background='URL("img/boton_hover.png")';
				document.getElementById("resta").style.backgroundImage='URL("img/boton.png")';
				document.getElementById("multiplicacion").style.background='URL("img/boton.png")';
				document.getElementById("divicion").style.background='URL("img/boton.png")';
		break
		case 2: document.getElementById("suma").style.background='URL("img/boton.png")';
				document.getElementById("resta").style.background='URL("img/boton_hover.png")';
				document.getElementById("multiplicacion").style.background='URL("img/boton.png")';
				document.getElementById("divicion").style.background='URL("img/boton.png")';
		break
		case 3: document.getElementById("suma").style.background='URL("img/boton.png")';
				document.getElementById("resta").style.background='URL("img/boton.png")';
				document.getElementById("multiplicacion").style.background='URL("img/boton_hover.png")';
				document.getElementById("divicion").style.background='URL("img/boton.png")';
		break
		case 4: document.getElementById("suma").style.background='URL("img/boton.png")';
				document.getElementById("resta").style.background='URL("img/boton.png")';
				document.getElementById("multiplicacion").style.background='URL("img/boton.png")';
				document.getElementById("divicion").style.background='URL("img/boton_hover.png")';
		break
		default:document.getElementById("suma").style.background='URL("img/boton.png")';
				document.getElementById("resta").style.background='URL("img/boton.png")';
				document.getElementById("multiplicacion").style.background='URL("img/boton.png")';
				document.getElementById("divicion").style.background='URL("img/boton.png")';
			}
}
function borrarlast(){
	borrado=pantalla;
	tamano=borrado.toString();
	cifras=tamano.length; //hayar número de caracteres en pantalla
	br=tamano.substr(cifras-1,cifras);
    tamano=tamano.substr(0,cifras-1); //quitar el ultimo caracter
    if (tamano==""){
    	tamano="0";
    }
   	e=document.getElementById("pantalla");
   	borrado=tamano;
   	pantalla=borrado;
    e.innerHTML=pantalla;
    if(br=="."){
    	punto=false;
    }
}
function addpunto(){
 	if(punto == false){
 	punto = true;
 	var str1 = pantalla;
 	var str2 = ".";
 	pantalla = str1.concat(str2);
 	var e = document.getElementById("pantalla");
 	e.innerHTML = pantalla;
 	} 
}
function limpiar(){
	punto=false;
	error=false;
	operacion=""
	i=0
	ac=0;
	op=0;
	pantalla="0";
	borrado='';
	document.getElementById("suma").style.backgroundImage='URL("img/boton.png")';
	document.getElementById("resta").style.backgroundImage='URL("img/boton.png")';
	document.getElementById("multiplicacion").style.backgroundImage='URL("img/boton.png")';
	document.getElementById("divicion").style.backgroundImage='URL("img/boton.png")';
	e=document.getElementById("pantalla");
	e.innerHTML=pantalla;

}
function acumulador(){
	document.getElementById('pantalla').style.MozTransition="all 1s";		
	switch(acumulados){
		case 0: document.getElementById('pantalla').style.MozTransform="scale(0.3 , 0.8) translate(435px,180px)";	
		break
		case 1: document.getElementById('pantalla').style.MozTransform="scale(0.3 , 0.8) translate(435px,260px)";
		break
		case 2: document.getElementById('pantalla').style.MozTransform="scale(0.3 , 0.8) translate(435px,340px)";				
	}

setTimeout((acumular),1000);

}

function acumular(){
	document.getElementById('pantalla').style.MozTransform="scale(1, 1) translate(0px,0px)";
	document.getElementById('pantalla').style.MozTransform="scale(1, 1) translate(0px,0px)";
	var x= document.getElementById('pantalla').innerHTML;

	if(acumulados==0){
		var e = document.getElementById('ac_x');
		e.innerHTML="X="+x;
		ac_x=x;
		document.getElementById("ac_x").style.backgroundImage='URL("img/acumulado1.png")';
		
	}
	if(acumulados==1){
	 	var e = document.getElementById('ac_y');
		e.innerHTML="Y="+x;
		ac_y=x;
		document.getElementById("ac_y").style.backgroundImage='URL("img/acumulado1.png")';

	} 
	if(acumulados==2){
		var e = document.getElementById('ac_z');
		e.innerHTML="Z="+x;
		ac_z=x;
		document.getElementById("ac_z").style.backgroundImage='URL("img/acumulado1.png")';		
	}
		acumulados++;
		if(acumulados>2){
			acumulados=0;
		}

}
function acpantalla(ac_name){
	var e=document.getElementById('pantalla');
	switch(ac_name){
		case 1: e.innerHTML=ac_x;
				pantalla=ac_x;

		break
		case 2: e.innerHTML=ac_y;
				pantalla=ac_y;

		break
		case 3: e.innerHTML=ac_z;
				pantalla=ac_z;

		break

	}
	color=false;

}
function acborrar(){
	alert("hola");
}

window.addEventListener('load', botones, false);




