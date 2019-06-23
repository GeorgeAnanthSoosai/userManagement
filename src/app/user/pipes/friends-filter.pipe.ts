import { Pipe, PipeTransform } from '@angular/core';

/**
 * Format friends list name just by adding comma and space next to it
 */
@Pipe({
  name: 'friendsFilter'
})
export class FriendsFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.join(", ")
  }

}
