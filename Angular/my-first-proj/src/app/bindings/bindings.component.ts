import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit{
  ngOnInit(): void {
    this.products = [{
      description:"TV",
      stock:10
    },
    {
      description:"Mobile",
      stock:15
    },
    {
      description:"Laptop",
      stock:0
    }
  
  
  
  ]
    
  }
  cssStringVar:string = 'red size20';
  isActive:boolean = false;
  isDisabled:boolean = false;
  status:string = "error1";
  products:any[];

  hasError(){
    return false;
  }

  isTrue(){
    return true;
  }

  getColor(){
    return 'green';
  }

  isProdInStock(product:any){
    return product.stock>0
  }



}
