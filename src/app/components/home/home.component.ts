import { Component } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 maxCharacters!:number;
 player!:string;
 constructor(private sharedData: SharedDataService){}

 setCharacters(){
  this.sharedData.setMaxCharacters(this.maxCharacters);
 }
 setPlayerName(){
  this.sharedData.setPlayerName(this.player)
 }
}
