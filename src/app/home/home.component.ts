import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dummyObj:any;
  constructor(private dsobject:DataService){

  }
  ngOnInit(){

    this.dsobject.getDataFrom().subscribe(

        data=>{

        this.dummyObj=data;
        console.log(data);

      },

      err=>{

        console.log("error in opening file is :",err);

      }

    )

  }

}
