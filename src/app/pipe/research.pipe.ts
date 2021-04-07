import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'research'
})
export class ResearchPipe implements PipeTransform {

  transform(items: any[], searchText: string, type: any): any[] {
    if(!items) {
      return []
    }
    if (!searchText) {
      return items
    }

    searchText = searchText.toLocaleLowerCase();

    return items.filter((it: any)=> {
      return it.author.toLocaleLowerCase().includes(searchText) || it.content.toLocaleLowerCase().includes(searchText)
    })
  }

}
