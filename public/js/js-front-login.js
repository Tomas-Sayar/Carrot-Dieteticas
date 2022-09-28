window.addEventListener("load", function () {

    let input = document.querySelectorAll('input');
    console.log(input + "funciono");


    let formulario = document.querySelector('.loginForm');
    formulario.style.backgroundColor = '#faedca';

    formulario.addEventListener("submit", function (e) {
        
        let errores = [];
        let ulErrores = document.querySelector(".errores ul");
        ulErrores.innerHTML = " ";
        let inputEmail = document.querySelector('#usuario');
        if (inputEmail.value == "") {
            errores.push("Tienes que ingresar un Email");
        }
        /*else if(inputEmail.value) { //distinto de la base de datos
            errores.push('El campo de Email tiene que ser válido');
        }*/

        let inputContraseña = document.querySelector('#contraseña');
        console.log(inputContraseña.value.length);
        if (inputContraseña.value == "") {
            errores.push("Tienes que ingresar una Contraseña");
        } else if (inputContraseña.value.length < 8) {
            errores.push('La contraseña tiene que tener al menos 8 carácteres');
        }

        if (errores.length > 0) {
            e.preventDefault();

            let ulErrores = document.querySelector(".errores ul");
            errores.forEach(error => {
            ulErrores.innerHTML += "<li>"+ error + "</li>";
                
            });
        }
        if (errores.length = 0) {
        formulario.submit();
    }
    });
});