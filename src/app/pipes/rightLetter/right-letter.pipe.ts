import { Pipe, PipeTransform } from '@angular/core';
import { TypingComponent } from '../../components/typing/typing.component';

@Pipe({
  name: 'rightLetter'
})
export class RightLetterPipe implements PipeTransform {

  constructor(private typingPage:TypingComponent){}
  transform(phrase: string, ...args: unknown[]): string {
    for(let word of phrase){
      for(let letter of word){
        if(this.typingPage.inputPhrase == letter) {
          letter.toUpperCase();
        }
      }
    }
    return phrase;
  }

}
