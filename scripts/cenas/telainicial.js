class TelaInicial{
  constructor(){
    
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial,0,0,width,height);
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(height/10);
    text('As aventuras de',width/2,height/3); 
    textSize(height/7);
    text('Hipsta',width/2,height/2.3);
  }
  
  _botao(){
    botaoGerenciador.y = height/7*5;
    botaoGerenciador.draw();
  }

}
