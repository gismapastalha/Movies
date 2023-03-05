import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smartTruncate'
})
export class SmartTruncatePipe implements PipeTransform {

  /*transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/
  transform(cadena: any, maxSize: any): any {
    const token = cadena.substr(0, parseInt(maxSize, 10)); if (token.length < cadena.length) {
    return token.substr(0, token.lastIndexOf(' ')) + '...';
    }
    return cadena;
    }


}
