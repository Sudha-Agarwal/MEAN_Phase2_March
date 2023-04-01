import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-json-data',
  templateUrl: './json-data.component.html',
  styleUrls: ['./json-data.component.css']
})
export class JsonDataComponent implements OnInit{
data:any[];
  constructor(private ds:DataService){

  }
  ngOnInit(): void {
    this.ds.getDataFromServer().subscribe(
      data=>this.data = data
    )   
  }

  

}
