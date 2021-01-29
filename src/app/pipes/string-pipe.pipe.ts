import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringPipe'
})
export class StringPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value.length > 150){
      return value.slice(0,149) + '... see more';

    }
  }

}
