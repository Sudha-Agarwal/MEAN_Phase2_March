import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-mobile-detail',
  templateUrl: './product-mobile-detail.component.html',
  styleUrls: ['./product-mobile-detail.component.css']
})
export class ProductMobileDetailComponent implements OnInit{
productId:string;
  constructor(private route:ActivatedRoute){
  }
  ngOnInit(): void {
    //alert("ngOninit called");
    this.productId = this.route.snapshot.paramMap.get('id');
    
    //send a request to server to fetch data corresponding to that particular id
  }
}
