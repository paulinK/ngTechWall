import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    if (!value) {
      return 'cv.png';
    }
    return value;
  }

}
