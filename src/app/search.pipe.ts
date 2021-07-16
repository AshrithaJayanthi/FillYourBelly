import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(recipeObj: any[], searchTerm: string): any[] {
    if(!recipeObj || !searchTerm){
      return recipeObj
    }
    else{
      return recipeObj.filter(recObj=>recObj.name.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1  )
    }
   }

}
