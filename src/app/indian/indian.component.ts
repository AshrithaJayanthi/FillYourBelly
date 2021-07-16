import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-indian',
  templateUrl: './indian.component.html',
  styleUrls: ['./indian.component.css']
})
export class IndianComponent implements OnInit {

  recipeObj:any;
  searchTerm:string;


  constructor(private dsobject:DataService){
      this.searchTerm=" ";
  }
  ngOnInit(){

    this.dsobject.getIndianRecipesData().subscribe(

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
