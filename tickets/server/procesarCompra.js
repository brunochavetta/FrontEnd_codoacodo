document.addEventListener("compraRealizada", function (event) {
    const mensaje = event.detail;

    let detalle = document.getElementById("detalle");
    detalle.innerHTML = mensaje;
});
