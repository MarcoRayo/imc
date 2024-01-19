function calcular() {
    if (document.getElementById("kilo").value && document.getElementById("metro").value) {
        var kg = document.getElementById("kilo").value;
        var mt = document.getElementById("metro").value;
        const imc = kg / (mt * mt);
        console.log("kg: " + kg + ", metro: " + mt);
        console.log(imc);
        if (imc <= 17.4) {
            document.getElementById("bajo").style.backgroundColor = "yellow";
            habilitarBorrar();
        } else {
            if (imc > 17.4 && imc <= 24.9) {
                document.getElementById("normal").style.backgroundColor = "green";
                habilitarBorrar();
            } else {
                if (imc >= 25 && imc <= 29.9) {
                    document.getElementById("sobre").style.backgroundColor = "orange";
                    habilitarBorrar();
                } else {
                    document.getElementById("obesidad").style.backgroundColor = "red";
                    habilitarBorrar();
                }
            }
        }
    }else{
        alert("Debes de rellenar todos los campos");
    }
}

function borrar() {
    document.getElementById("bajo").style.backgroundColor = "white";
    document.getElementById("normal").style.backgroundColor = "white";
    document.getElementById("sobre").style.backgroundColor = "white";
    document.getElementById("obesidad").style.backgroundColor = "white";
    habilitarCalcular();
}

function validarInput() {
    var valorInput = document.getElementById("miInput").value;
    if (valorInput.trim() !== "") {
        document.getElementById("mensajeError").innerText = "";
    } else {
        document.getElementById("mensajeError").innerText = "Por favor, ingresa un valor en el input.";
    }
}

function habilitarBorrar() {
    document.getElementById("btnBorrar").disabled = false;
    document.getElementById("btnCalcular").disabled = true;
}

function habilitarCalcular() {
    document.getElementById("btnBorrar").disabled = true;
    document.getElementById("btnCalcular").disabled = false;
}