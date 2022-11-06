//variables
var precioEntrada=200;
var descuentoEstudiante=80;
var descuentoTrainee=50;
var descuentoJunior=15;

var nombre=document.getElementById("nombre");
var apellido=document.getElementById("apellido");
var correo=document.getElementById("correo");
var cant=document.getElementById("cant");
var categoriaTicket=document.getElementById("categoriaTicket");

//botones
btnBorrar.addEventListener("click", borrarTodo);

btnResumen.addEventListener("click", totalAPagar);


//funcion verificación

function validacion() {
    if (nombre.value=="" && apellido.value=="" && correo.value=="" && ((cant.value<=0)||(isNaN(cant.value)))) {
            alert("Es necesario declarar Nombre, Apellido, Correo y Cantidad");
            nombre.classList.add("is-invalid");
            apellido.classList.add("is-invalid");
            correo.classList.add("is-invalid");
            cant.classList.add("is-invalid");
            nombre.focus();
            return;
          }

    else if (nombre.value=="") {
        alert("El campo Nombre está incompleto");
        nombre.classList.add("is-invalid");
        nombre.focus();
      return;
    }
    else if (apellido.value=="") {
        alert("El campo Apellido está incompleto");
        apellido.classList.add("is-invalid");
        apellido.focus();
      return;
    }
    else if (correo.value=="") {
        alert("El campo Correo está incompleto");
        correo.classList.add("is-invalid");
        correo.focus();
      return;
    }

    const emailValido=correo=>{
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    }

        if(!emailValido(correo.value)){
            alert("El correo es inválido");
            correo.classList.add("is-invalid");
            correo.focus();
            return;
        }

    else if ((cant.value<=0)||(isNaN(cant.value))) {
        alert("La cantidad de tickets es inválida");
        cant.classList.add("is-invalid");
        cant.focus();
        return;
      }
  }

//funcion quitar clase

function quitarInvalido(){
let claseRojo = document.querySelectorAll(".form-control,.form-select");
    for (let i = 0; i < claseRojo.length; i++) {
        claseRojo[i].classList.remove ("is-invalid");
    }
}

//funcion calculadora

function totalAPagar(){
    quitarInvalido()
    validacion()
    
    let precioTotalEntrada=cant.value*precioEntrada;

    if(categoriaTicket.value==0){
        precioTotalEntrada=precioTotalEntrada;
    }
    if(categoriaTicket.value==1){
        precioTotalEntrada=precioTotalEntrada-(precioTotalEntrada*descuentoEstudiante/100);
    }
    if(categoriaTicket.value==2){
        precioTotalEntrada=precioTotalEntrada-(precioTotalEntrada*descuentoTrainee/100);
    }
    if(categoriaTicket.value==3){
        precioTotalEntrada=precioTotalEntrada-(precioTotalEntrada*descuentoJunior/100);
    }
    totalAPagarBox.innerHTML="Total a Pagar: $"+precioTotalEntrada;
    
}


//funcion borrarTodo
function borrarTodo(){
    quitarInvalido()
    document.getElementById("myForm").reset();
    totalAPagarBox.innerHTML="Total a Pagar: $";
  }
