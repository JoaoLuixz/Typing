import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'TypingGame';
  timerRunning:Boolean = false;
  timer: number = 0;
  phrases: Array<Object> = [];
  phrase = {
    content: '',
    author: ''
  };
  inputPhrase!: string;
  apiResponse: any;
  cronometer: any;
  startedTyping = false;
  constructor(private http: HttpClient){
  http.get('https://api.quotable.io/random').subscribe(answer => {
    console.log(answer);
    this.apiResponse = answer;
    this.phrase.content = this.apiResponse.content;
    this.phrase.author = this.apiResponse.author;
    this.phrases.push(this.phrase.content);
    this.startTyping();
  })
}
 
 
  // Começa a contagem do cronômetro
  startTyping(){
    this.cronometer = setInterval(() => {
      this.timer++
    }, 1000)
  }
  
  // Para o cronômetro
  stopTyping(){
    clearInterval(this.cronometer);
  }
  // Incío de ciclo da aplicação onde verifica se o usuário digitiu algo
  ngOnInit(): void {
    
  }
}

