const calcTotal = () => {
    const precio = 1000

    let cant = document.getElementById("cant").value

    if (cant >= 1) {
        let total = cant * precio
        let desc = document.getElementById("desc").value
        if (desc != 0) {
            total = total - (total * desc / 100)
        }
        document.getElementById("total").className = "bg-info p-1"
        document.getElementById("total").innerHTML = total
    } else {
        document.getElementById("total").className = "bg-danger p-1"
        document.getElementById("total").innerHTML = "Error! La cantidad de tickets a comprar debe ser mayor o igual a 1"
    }
}

(() => {
    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();

        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let cant = document.getElementById("cant").value;
        let desc = document.getElementById("desc").value;

        var mensaje = "";
        mensaje += "Nombre: " + nombre + "\n";
        mensaje += "Apellido: " + apellido + "\n";
        mensaje += "Cantidad de Tickets: " + cant + "\n";
        mensaje += "Descuento: " + desc + "%\n";

        const event = new CustomEvent("compraRealizada", { detail: mensaje });
        document.dispatchEvent(event);
    });
});

const comprar = () => {
    let mensaje = "Compra realizada con éxito! \n"
    mensaje += "Desea ver el detalle de la compra?"

    let detalle = confirm(mensaje)

    if(detalle){
        window.location.href = './server/procesarCompra.html'
    }
}