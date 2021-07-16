import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  recipeObj:any;
  searchTerm:string;


  constructor(private dsobject:DataService){
      this.searchTerm=" ";
  }
  ngOnInit(){

    this.dsobject.getBreakfastRecipesData().subscribe(

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
