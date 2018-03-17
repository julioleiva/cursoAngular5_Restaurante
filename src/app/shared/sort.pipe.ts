import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort',
})
export class SortPipe implements PipeTransform {
    // Value es lo que va a la izquierda del pipe, ...args
    transform(value: any[], field: string = 'name', dir: string = 'ASC') {
        const direction = dir === 'ASC' ? 1 : -1;
        return value.sort((a: any, b: any) => {
            if (a[field] < b[field]) {
                return -1 * direction;
            } else if (a[field] > b[field]) {
                return 1 * direction;
            }
            return 0;
        });
    }
}
