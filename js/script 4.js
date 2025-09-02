function calculadora() {
    let pedido = document.getElementById("inValorPedido").value;

    let perc = 0;
    if (pedido >= 2000) {
        perc = 1.5;
    }
    if (pedido >= 1500) {
        perc = 1.0;
    }
    if (pedido >= 1000) {
        perc = 0.8;
    }
    if (pedido >= 500) {
        perc = 0.5;
    }

    document.getElementById("inPercDesc").value = perc;
    document.getElementById("inValDesc").value = pedido * perc / 100;
    document.getElementById("inValFinal").value = pedido - pedido * perc / 100;
}
