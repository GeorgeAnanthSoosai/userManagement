import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe used for Age clasification 
 * It's help to identify user category by it's age limit
 */
@Pipe({
  name: 'ageClasification'
})
export class AgeClasificationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value < 13) {
      return "Kid"
    } else if(value <= 18) {
      return "Teenagers";
    } else if(value <= 35 ) {
      return "Adult"
    } else if( value <= 55) {
      return "Middle-aged Adults"
    } else {
      return "Senior Citizen"
    }
    return "";
  }

}
