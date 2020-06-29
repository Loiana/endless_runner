
function preload() {
  imagemCenario=loadImage('images/cenario/floresta.png');
  imagemPersonagem=loadImage('images/personagens/correndo.png');
  imagemInimigo=loadImage('images/inimigos/gotinha.png');
  imagemInimigoGrande=loadImage('images/inimigos/troll.png');
  imagemInimigoVoador=loadImage('images/inimigos/gotinha-voadora.png');
  imagemGameOver=loadImage('images/assets/game-over.png');
  imagemVida=loadImage('images/assets/coracao.png');
    imagemTelaInicial=loadImage('images/assets/telaInicial.png');
    fonteTelaInicial=loadFont('images/assets/fonteTelaInicial.otf');
    fita=loadJSON('fita/fita.json');
  
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}