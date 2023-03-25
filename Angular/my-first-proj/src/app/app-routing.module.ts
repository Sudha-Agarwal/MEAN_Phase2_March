import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ProductLaptopListComponent } from './product-laptop-list/product-laptop-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductMobileDetailComponent } from './product-mobile-detail/product-mobile-detail.component';
import { ProductMobileListComponent } from './product-mobile-list/product-mobile-list.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path:'product-list',
    children:[
      {path:'', component:ProductListComponent},
      {path:'mobile-list', component: ProductMobileListComponent},
      {path:'mobile-detail/:id', component:ProductMobileDetailComponent},
      {path:'laptop-list', component: ProductLaptopListComponent}
    ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
