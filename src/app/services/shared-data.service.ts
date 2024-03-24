import { Injectable } from '@angular/core';
import { TypingComponent } from '../components/typing/typing.component';
import { HomeComponent } from '../components/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  maxCharacters!:number;
  player!:string;
  constructor() {}
  setMaxCharacters(_value: number = 30): void {
    this.maxCharacters = _value;
  }
  getMaxCharacters(): number {
    return this.maxCharacters;
  }
  setPlayerName(_name:string = "Anônimo"){
    this.player = _name;
  }
  getPlayerName():string{
    return this.player;
  }

}
