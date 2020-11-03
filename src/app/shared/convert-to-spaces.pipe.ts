import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
  transform(value: string, replaceWith: string = ' '): string {
    return value.replace('-', replaceWith);
  }
}
