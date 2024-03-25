import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wpm'
})
export class WpmPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value == null || value == Infinity ? 0 : `${value.toFixed(2)} wpm`;
  }

}
