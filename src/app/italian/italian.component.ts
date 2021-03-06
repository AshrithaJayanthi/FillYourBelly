import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-italian',
  templateUrl: './italian.component.html',
  styleUrls: ['./italian.component.css']
})
export class ItalianComponent implements OnInit {

  recipeObj:any;
  searchTerm:string;


  constructor(private dsobject:DataService){
      this.searchTerm=" ";
  }
  ngOnInit(){

    this.dsobject.getItalianRecipesData().subscribe(

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
