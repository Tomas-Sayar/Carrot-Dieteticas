window.addEventListener("load", function () {

    let input = document.querySelectorAll('input');
    console.log(input + "funciono");


    let formulario = document.querySelector('form.register');
    formulario.style.backgroundColor = '#faedca';

    formulario.addEventListener("submit", function (e) {
        let errores = [];
        let ulErrores = document.querySelector(".errores ul");
        ulErrores.innerHTML = " ";
        let inputNombre = document.querySelector('#nombreApellido');
        if (inputNombre.value == "") {
            errores.push("Tienes que ingresar un Nombre y Apellido");
        }
        let inputUsuario = document.querySelector('#nombreDeUsuario');
        if (inputUsuario.value == "") {
            errores.push("Tienes que ingresar un Nombre de Usuario");
        }

        let inputEmail = document.querySelector('#email');
        if (inputEmail.value == "") {
            errores.push("Tienes que ingresar un Email");
        }
        /*else if(inputEmail.value) { //distinto de la base de datos
            errores.push('El campo de Email tiene que ser válido');
        }*/
        let inputFechaNac = document.querySelector('#fechaDeNacimiento');
        if (inputFechaNac == "") {
            errores.push("Tienes que ingresar una Fecha de Nacimiento");
        }
        let inputDomicilio = document.querySelector('#domicilio');
        if (inputDomicilio == "") {
            errores.push("Tienes que ingresar una Dirección");
        }

        let inputContraseña = document.querySelector('form.register #contraseña');
        if (inputContraseña.value == "") {
            errores.push("Tienes que ingresar una Contraseña");
        } else if (inputContraseña.value.length < 8) {
            errores.push('La contraseña tiene que tener al menos 8 carácteres');
        }
        console.log(inputContraseña)

        let confirmContraseña = document.querySelector('form.register #confirm');
        if (confirmContraseña.value == "") {
            errores.push("Tienes que confirmar la Contraseña");
        } else if (confirmContraseña.value !== inputContraseña.value) {
            errores.push('La contraseña tienen que ser iguales');
        }

        if (errores.length > 0) {
            e.preventDefault();

            //let ulErrores = document.querySelector(".errores ul");
            errores.forEach(error => {
                ulErrores.innerHTML += "<li>" + error + "</li>";

            });
        }
        if (errores.length = 0) {
            formulario.submit();
        }
    });
});