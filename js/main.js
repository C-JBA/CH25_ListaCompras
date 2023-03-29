// El código va aquí -> 
let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
//index 110
btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    txtNombre.value = "";
    txtNumber.value = "";

})

btnAgregar.addEventListener("click", function (event) {
    event.preventDefault();
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    let lista= "los siguientes campos deben ser llenados correctamente:<ul>";

    if (txtNumber.value.length == 0) {
        txtNumber.style.border = "solid thin red";

lista+= "<li>Se debe escribir una cantidad vállida</li>";

        //alertValidacionesTexto.inerHTML="Se debe escribir un nombre válido";
        alertValidaciones.style.display="block"; //none, block, inline
    } else {
        txtNumber.style.border = "";
    }//if txtNumber

    if (txtNombre.value.length == 0) {
        txtNombre.style.border = "solid thin red";

        lista+= "<li>Se debe escribir un texto vállido</li>"

        //alertValidacionesTexto.inerHTML+="Se debe escribir una cantidad válida";
        alertValidaciones.style.display="block";
    } else {
        txtNombre.style.border = "";
    }//if txtNumber
lista+="</ul>"
alertValidacionesTexto.insertAdjacentHTML("beforeend",lista);

})//btnAgregar click



txtNombre.addEventListener("blur", function (event) {
    event.preventDefault();
    txtNombre.value = txtNombre.value.trim();
})

txtNumber.addEventListener("blur", function (event) {
    event.preventDefault();
    txtNumber.value = txtNumber.value.trim();
})