import { Component, HostListener, input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedDataService } from '../../services/shared-data.service';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrl: './typing.component.scss'
})
export class TypingComponent {
  // Título da aplicação/componente
  title = 'TypingGame';
  // variável responsável por armazenar os segundos
  timerSeconds: number = 0;
  // variável resonsável por armazenar os minutos
  phrases: Array<{
    content: string,
    author: string
  }> = [];
  // Objeto respnsável por armazenas as frases requisitadas
  phrase = {
    content: '',
    author: ''
  };
  // variável responsável por armazenas a frase digitada pelo usuário
  inputPhrase!: string;
  // variável respnsável por armazernar as palavras digitadas pelo usuário
  inputWords!: Array<string>;
  // variável responsável por armazenar o resultado do cálculo da quantidade de palavras por minuto.
  wpm!: number;
  // variável responsável por armazenas as informações recebidas da API de frases.
  apiResponse: any;
  // variável responsável por amazernar o intervalo de tempo do cronômetro
  timer: any;
  // variável reponsável por armazenar a quantidade máxima de caracteres que o usuáro deseja
  maxCharacters: number;
  // variável responsável por armazenar o nome do usuário
  playerName: string;
  // contrutor da classe TypingComponent
  constructor(private http: HttpClient, private sharedData: SharedDataService){
    // instrução que define a quantidade máxima de caracteres baseado na esclha do usuário
    this.maxCharacters = this.sharedData.getMaxCharacters();
    // intrução que define o nome digitado pelo usuário
    this.playerName = this.sharedData.getPlayerName();
    // chamada do método que faz a requisição de uma nova frase
    this.newPhrase();
    // chamada do método que inicia o cronômetro
    this.startTyping();
}
// Meteodo que faz a requisição de uma nova frase.
 newPhrase(){
  this.http.get(`https://api.quotable.io/random?maxLength=${this.maxCharacters}`).subscribe(answer => {
    console.log(answer);
    this.apiResponse = answer;
    this.phrase.content = this.apiResponse.content;
    this.phrase.author = this.apiResponse.author;
    this.phrases.push({
      content: this.phrase.content,
      author: this.phrase.author,
    });
    this.inputPhrase = "";
    this.stopTyping();
    this.startTyping();
  })
  
  this.timerSeconds = 0;
 }
 // Metedodo que executa o calculo de pralavras por minuto
 calculateWPM():number{
  this.inputWords = this.inputPhrase.split(" ");
  return ((this.inputWords.length) / (this.timerSeconds / 60));
}
  // Metodo que inicia a contagem do cronômetro
  startTyping(){
    this.timer = setInterval(() => {
      if(this.timerSeconds == 60){
        this.timerSeconds = 1;
      }
      else{
        this.timerSeconds++
      }
    }, 1000)
  }
  
  // Metdodo que termina a contagem do cronômetro
  stopTyping(){
    clearInterval(this.timer);
    this.wpm = this.calculateWPM();
  }
}
