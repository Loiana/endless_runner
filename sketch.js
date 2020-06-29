

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario,5);
  pontuacao = new Pontuacao();
  
  personagem = new Personagem(matrizPersonagem,imagemPersonagem, 0 ,30, 110, 135, 220,270);
  
  const inimigo = new Inimigo(matrizInimigo,imagemInimigo,width-50, 30, 52, 52,104,104,10,100);
  const inimigoGrande = new Inimigo(matrizInimigoGrande,imagemInimigoGrande,width-200, 0, 200, 200,400,400,10,100);
  const inimigoVoador = new Inimigo(matrizInimigoVoador,imagemInimigoVoador,width-52, 200, 100, 75,200,150,10,100);
  
  inimigos.push(inimigo);
  inimigos.push(inimigoGrande);
  inimigos.push(inimigoVoador);
  
  frameRate(40);
  somDoJogo.loop();
}

function keyPressed(){
  if(key === 'ArrowUp'){
   personagem.pula(); 
    somDoPulo.play();
  }
}

function draw() {
  cenario.exibe();
  cenario.move();
  
  pontuacao.exibe();
  pontuacao.adicionaPonto();
  
  //circle(mouseX,mouseY,200);
  personagem.exibe();
  personagem.aplicaGravidade();
  
  const inimigo = inimigos[inimigoAtual];
  const inimigoVisivel = inimigo.x < -inimigo.largura;
  
  inimigo.exibe();
  inimigo.move();
  
  if(inimigoVisivel){
    inimigoAtual++;
    if (inimigoAtual > 2){
      inimigoAtual=0;
    }
    inimigo.velocidade=parseInt(random(10,20));
  }
  
  if(personagem.estaColidindo(inimigo)){
    image(imagemGameOver,width/2-200,height/3)
    console.log('colidiu');   
    noLoop();
  }
  
  /*
  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();
    if(personagem.estaColidindo(inimigo)){
      image(imagemGameOver,width/2-200,height/3)
      console.log('colidiu');   
      noLoop();
    }
  })
  */
  
}


