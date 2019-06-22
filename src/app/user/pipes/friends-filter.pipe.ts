import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'friendsFilter'
})
export class FriendsFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.join(", ")
  }

}
