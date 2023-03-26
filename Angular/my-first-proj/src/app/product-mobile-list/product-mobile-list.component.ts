import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-mobile-list',
  templateUrl: './product-mobile-list.component.html',
  styleUrls: ['./product-mobile-list.component.css']
})
export class ProductMobileListComponent implements OnInit{ 
  products:Product[];
  constructor(route:ActivatedRoute, private ds:DataService){
  }
  ngOnInit(): void {
    this.ds.getProducts('Mobile')
    .subscribe(products => this.products=products)
  }

  







}
