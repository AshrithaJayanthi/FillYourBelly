import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})



export class AppComponent implements OnInit
{
 
  constructor() { }

  ngOnInit(): void {
  } 
  
}