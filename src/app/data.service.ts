import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DataService {

    constructor(private hc:HttpClient) {
    }
   
    getDataFrom():Observable<any>
    {
      return this.hc.get<any>("https://tasty.p.rapidapi.com/recipes/list",
      {
        "params":{
          "from": "0",
          "size": "20",
          "tags": "under_30_minutes"
        },
  
        "headers":{
          "x-rapidapi-key": "1c30b2d327msha16f6ff0f986273p10baccjsnd82abdee2dbb",
	"x-rapidapi-host": "tasty.p.rapidapi.com",
        }
      }
    ); 
    }

//indian cuisine

getIndianRecipesData():Observable<any>
{
  return this.hc.get<any>("https://tasty.p.rapidapi.com/recipes/list",
  {
    "params":{
      "from": "0",
      "size": "100",
      "tags": "indian"
    },

    "headers":{
      "x-rapidapi-key": "1c30b2d327msha16f6ff0f986273p10baccjsnd82abdee2dbb",
"x-rapidapi-host": "tasty.p.rapidapi.com",
    }
  }
); 
}
  }  
