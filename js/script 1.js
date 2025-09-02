function dadosValidos() {
    ocultarErro();
    ocultarSucesso();

    let data = frmRegistro.inData.value;
    let nome = frmRegistro.inCli.value;
    let fone = frmRegistro.inFone.value;
    let mail = frmRegistro.inMail.value;
    let produto = frmRegistro.inProd.value;
    let qtd = frmRegistro.inQtd.value;
    let valor = frmRegistro.inVal.value;

    if (data == '') {
        mostrarErro('O campo data não pode estar vazio!');
        frmRegistro.inData.focus();
        return false;
    }
    if (nome == '') {
        mostrarErro('O campo nome não pode estar vazio!');
        frmRegistro.inCli.focus();
        return false;
    }
    if (fone == '') {
        mostrarErro('O campo telefone não pode estar vazio!');
        frmRegistro.inFone.focus();
        return false;
    }
    if (mail == '') {
        mostrarErro('O campo e-mail não pode estar vazio!');
        frmRegistro.inMail.focus();
        return false;
    }
    if (produto == '') {
        mostrarErro('O campo produto não pode estar vazio!');
        frmRegistro.inProd.focus();
        return false;
    }
    if (qtd == '' || parseInt(qtd) <= 0) {
        mostrarErro('A quantidade deve ser positiva!');
        frmRegistro.inQtd.focus();
        return false;
    }
    if (valor == '' || parseFloat(valor) <= 0) {
        mostrarErro('O valor unitário deve ser positivo!');
        frmRegistro.inVal.focus();
        return false;
    }

    mostrarSucesso();
    frmRegistro.reset();
    return true;
}

function mostrarErro(mensagem) {
    let erroDiv = document.getElementById('erro');
    erroDiv.innerText = mensagem;
    erroDiv.style.display = "block";
}

function ocultarErro() {
    document.getElementById('erro').style.display = "none";
}

function mostrarSucesso() {
    document.getElementById('sucesso').style.display = "block";
}

function ocultarSucesso() {
    document.getElementById('sucesso').style.display = "none";
}
