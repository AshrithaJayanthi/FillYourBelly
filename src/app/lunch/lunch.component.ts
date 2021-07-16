import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  recipeObj:any;
  searchTerm:string;


  constructor(private dsobject:DataService){
      this.searchTerm=" ";
  }
  ngOnInit(){

    this.dsobject.getLunchRecipesData().subscribe(

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
