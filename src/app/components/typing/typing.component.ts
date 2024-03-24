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
  title = 'TypingGame';
  timerCount: number = 0;
  phrases: Array<{
    content: string,
    author: string
  }> = [];
  phrase = {
    content: '',
    author: ''
  };
  inputPhrase!: string;
  inputWords!: Array<string>;
  wpm!: number;
  apiResponse: any;
  timer: any;
  maxCharacters: number;
  playerName: string;
  constructor(private http: HttpClient, private sharedData: SharedDataService){
    this.maxCharacters = this.sharedData.getMaxCharacters();
    this.playerName = this.sharedData.getPlayerName();
    this.newPhrase();
    this.startTyping();
}
 calculateWPM():number{
   this.inputWords = this.inputPhrase.split(" ");
   return ((this.inputWords.length) / (this.timerCount / 60));
 }
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
  })
  this.timerCount = 0;
 }
  // Começa a contagem do cronômetro
  startTyping(){
    this.timer = setInterval(() => {
      if(this.timerCount == 60){
        this.timerCount = 1;
      }
      else{
        this.timerCount++
      }
    }, 1000)
  }
  
  // Para o cronômetro
  stopTyping(){
    clearInterval(this.timer);
    this.wpm = this.calculateWPM();
  }
}
