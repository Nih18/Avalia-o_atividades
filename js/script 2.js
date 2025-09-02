function criarImagens() {
    let quantidade = document.getElementById("inQtdImg").value;
    let canvas = document.getElementById("canvas");
 
    canvas.innerHTML = "";
 
    if (quantidade > 0) {
      let imagensHTML = "";
      for (let i = 0; i < quantidade; i++) {
        imagensHTML += '<img src="img/computador.png" class="imagens">';
      }
      canvas.innerHTML = imagensHTML;
    } else {
      canvas.innerHTML = "Informe uma quantidade válida!";
    }
  }
