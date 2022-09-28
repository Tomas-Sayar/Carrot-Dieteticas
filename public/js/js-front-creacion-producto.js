window.addEventListener("load", function () {

    let input = document.querySelectorAll('input');
    console.log(input + "funciono");


    let formulario = document.querySelector('form.creacion-producto');
    formulario.style.backgroundColor = '#faedca';
    formulario.addEventListener("submit", function (e) {
        let errores = [];
        let ulErrores = document.querySelector(".errores ul");
        ulErrores.innerHTML = " ";
        let inputName = document.querySelector('#name');
        if (inputName.value == "") {
            errores.push("Tienes que ingresar el nombre del Producto");
        } else if (inputName.value.length <= 4) {
            errores.push('El nombre del Producto tiene que tener al menos 5 carácteres');
        }
        /*else if(inputEmail.value) { //distinto de la base de datos
            errores.push('El campo de Email tiene que ser válido');
        }*/

        let inputDescripcion = document.querySelector('#description');
        if (inputDescripcion.value == "") {
            errores.push("Tienes que ingresar una Descripción");
        } else if (inputDescripcion.value.length <= 20) {
            errores.push('La descripción tiene que tener al menos 20 carácteres');
        }

        if (errores.length > 0) {
            e.preventDefault();

            errores.forEach(error => {
                ulErrores.innerHTML += "<li>" + error + "</li>";

            });
        }
        if (errores.length = 0) {
            formulario.submit();
        }
    });
});