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
          "x-rapidapi-key": "f11d9321cdmsh35f0f41d8d5c90dp16fc75jsnba37cc33edff",
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
      "x-rapidapi-key": "f11d9321cdmsh35f0f41d8d5c90dp16fc75jsnba37cc33edff",
"x-rapidapi-host": "tasty.p.rapidapi.com",
    }
  } 
); 
}
getItalianRecipesData():Observable<any>
{
  return this.hc.get<any>("https://tasty.p.rapidapi.com/recipes/list",
  {
    "params":{
      "from": "0",
      "size": "100",
      "tags": "italian"
    },

    "headers":{
      "x-rapidapi-key": "f11d9321cdmsh35f0f41d8d5c90dp16fc75jsnba37cc33edff",
"x-rapidapi-host": "tasty.p.rapidapi.com",
    }
  } 
); 
}
getAmericanRecipesData():Observable<any>
{
  return this.hc.get<any>("https://tasty.p.rapidapi.com/recipes/list",
  {
    "params":{
      "from": "0",
      "size": "100",
      "tags": "american"
    },

    "headers":{
      "x-rapidapi-key": "f11d9321cdmsh35f0f41d8d5c90dp16fc75jsnba37cc33edff",
"x-rapidapi-host": "tasty.p.rapidapi.com",
    }
  } 
); 
}

getBreakfastRecipesData():Observable<any>
{
  return this.hc.get<any>("https://tasty.p.rapidapi.com/recipes/list",
  {
    "params":{
      "from": "0",
      "size": "100",
      "tags": "breakfast"
    },

    "headers":{
      "x-rapidapi-key": "f11d9321cdmsh35f0f41d8d5c90dp16fc75jsnba37cc33edff",
"x-rapidapi-host": "tasty.p.rapidapi.com",
    }
  } 
); 
}

getLunchRecipesData():Observable<any>
{
  return this.hc.get<any>("https://tasty.p.rapidapi.com/recipes/list",
  {
    "params":{
      "from": "0",
      "size": "100",
      "tags": "lunch"
    },

    "headers":{
      "x-rapidapi-key": "f11d9321cdmsh35f0f41d8d5c90dp16fc75jsnba37cc33edff",
"x-rapidapi-host": "tasty.p.rapidapi.com",
    }
  } 
); 
}

getDinnerRecipesData():Observable<any>
{
  return this.hc.get<any>("https://tasty.p.rapidapi.com/recipes/list",
  {
    "params":{
      "from": "0",
      "size": "100",
      "tags": "dinner"
    },

    "headers":{
      "x-rapidapi-key": "f11d9321cdmsh35f0f41d8d5c90dp16fc75jsnba37cc33edff",
"x-rapidapi-host": "tasty.p.rapidapi.com",
    }
  } 
); 
}
  }  
