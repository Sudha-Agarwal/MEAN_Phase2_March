import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-mobile-list',
  templateUrl: './product-mobile-list.component.html',
  styleUrls: ['./product-mobile-list.component.css']
})
export class ProductMobileListComponent {
  products:Product[] = [
    {id:1, name:'Product 1', description:'Description 1', type:'Mobile'},
    {id:2, name:'Product 1', description:'Description 1', type:'Mobile'},
    {id:3, name:'Product 1', description:'Description 1', type:'Mobile'},
    {id:4, name:'Product 1', description:'Description 1', type:'Mobile'}
  ]
 
  constructor(route:ActivatedRoute){

  }






}
