import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationfilter'
})
export class LocationPipePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.location.toLowerCase().includes(searchText);
    });
   }
}