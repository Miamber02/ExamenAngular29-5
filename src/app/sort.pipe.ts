import { Pipe, PipeTransform } from '@angular/core';
import { Datum } from './user';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(users: Datum[], order: string): Datum[] {
    if (!users) return [];
    if (order === 'asc') {
      return users.sort((a, b) => a.first_name.localeCompare(b.first_name));
    } else if (order === 'desc') {
      return users.sort((a, b) => b.first_name.localeCompare(a.first_name));
    } else {
      return users;
    }
  }
}
