import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'temp'})
export class TemperatureUnitsPipe implements PipeTransform {
  transform(value: number, format:string): string {
    if (format === 'metric') {
      return Math.round((value - 32)/1.8) + "\xB0C";
    } else if (format === 'imperial'){
      return value + "\xB0F";
    }
  }
}

@Pipe({name: 'length'})
export class LengthUnitsPipe implements PipeTransform {
  transform(value: number, format:string): string {
    if (format === 'metric') {
      return Math.round(value * 2.54) + " cm";
    } else if (format === 'imperial'){
      return value + " in";
    }
  }
}
