import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'short'
})
export class ShortPipe implements PipeTransform {

    transform(value: String, args?: number): any {
        let len = (args) ? args : 40
        return value.substr(0, len) + '....';
    }

}
