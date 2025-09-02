
/*--Lâmpada--*/
function alterarLampadas() {
  let imagem = document.getElementById('lampada');    
  let caminho = imagem.src;    
  let posicaoUltimaBarra = caminho.lastIndexOf('/');    
  let arquivo = caminho.substring(posicaoUltimaBarra + 1);

  if (arquivo == 'acesa.jpg' || arquivo == '')
  imagem.src = 'img/apagada.jpg';
  else
  imagem.src = 'img/acesa.jpg';
}





