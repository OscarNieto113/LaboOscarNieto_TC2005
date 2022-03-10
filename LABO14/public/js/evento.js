function verificarPasswords() {
    pass1 = document.getElementById('pass');
    pass2 = document.getElementById('passConfirm');
    if (pass1.value != pass2.value) {

        document.getElementById("error").classList.add("mostrar");
        return false;
    }
    else {
        document.getElementById("error").classList.remove("mostrar");
        document.getElementById("ok").classList.remove("ocultar");
        return true;
    }

}
