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
    this.ds.getDataFromServer().subscribe({
      next(value){console.log(value)},
      error(err){console.log(err)},
      complete(){console.log("complete")}
    });
    this.ds.getDataFromServer().subscribe({
      next:   data=>this.data = data,
      error: err=>alert("Data not found"),
      complete: ()=>console.log("complete")
    }   
    ) ;
        this.ds.postDataToNodeServer("1","sudha").subscribe(
      data =>console.log(data.data)
    )
  }

  

}
