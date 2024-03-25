import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {
  min: number = 0;
  time!: number;
  transform(value: number, ...args: unknown[]): unknown {
    if(value == 60) {
      this.min++;
      value = 1;
    }
    if(value == 0){
      this.min = 0;
    }

    return `${this.min}"${value}'`;

    //return value > 60 ? `${value / 60}s` : `${value}s`;
  }

}
