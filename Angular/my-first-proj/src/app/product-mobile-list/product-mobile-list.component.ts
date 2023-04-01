import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-mobile-list',
  templateUrl: './product-mobile-list.component.html',
  styleUrls: ['./product-mobile-list.component.css']
})
export class ProductMobileListComponent implements OnInit, OnDestroy{ 
  products:Product[];
  sub:Subscription;
  constructor(route:ActivatedRoute, private ds:DataService){
  }
  ngOnDestroy(): void {
   this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.sub = this.ds.getProducts('Mobile')
    .subscribe(products => this.products=products);    
  }

  







}
