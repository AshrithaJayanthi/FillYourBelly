import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-american',
  templateUrl: './american.component.html',
  styleUrls: ['./american.component.css']
})
export class AmericanComponent implements OnInit {
  recipeObj:any;
  searchTerm:string;


  constructor(private dsobject:DataService){
      this.searchTerm=" ";
  }
  ngOnInit(){

    this.dsobject.getAmericanRecipesData().subscribe(

        data=>{

        this.recipeObj=data;
        console.log(data);

      },

      err=>{

        console.log("error in opening file is :",err);

      }

    )

  }
}
