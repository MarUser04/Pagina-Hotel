var adultos1= document.getElementById('adultos');
var adultos2= document.getElementById('adultos2');
var kids1= document.getElementById('kids');
var kids2= document.getElementById('kids2')


var personas= [adultos1, kids1];

function validarPersonas(){
    var cant=true;
    for(var i=0; i< personas.length; i++){
        if(personas[i]== "" || personas[i].checkValidity() ==false){
             alert("Rellene todos los campos con cantidades validas. (Entre 1-6 personas)");  
             cant=false;
      }
    }   

    if(cant){
        alert("Datos ingresados Correctamente. Iniciando busqueda de infomarcion");
    }
}

var btn1= document.getElementById('search1');


btn1.addEventListener('click', validarPersonas);

//
var personas2= [adultos2, kids2];

function validarPersonas2(){
    var cant=true;
    for(var i=0; i< personas2.length; i++){
        if(personas2[i]== "" || personas2[i].checkValidity() ==false){
             alert("Rellene todos los campos con cantidades validas. (Entre 1-6 personas)");  
             cant=false;
      }
    }   

    if(cant){
        alert("Datos ingresados Correctamente. Iniciando busqueda de infomarcion");
    }
}


var btn2= document.getElementById('search2');

btn2.addEventListener('click', validarPersonas2);


///////
var hab1= document.getElementById('btnHab1');
var hab2= document.getElementById('btnHab2');
var hab3= document.getElementById('btnHab3');

var seleccionHab= function(){
    var conf=confirm("Desea elegir esta Habitacion?");
    
    if(conf){
        alert("Habitacion seleccionada.");
    }
}

hab1.addEventListener('click', seleccionHab);
hab2.addEventListener('click', seleccionHab);
hab3.addEventListener('click', seleccionHab);