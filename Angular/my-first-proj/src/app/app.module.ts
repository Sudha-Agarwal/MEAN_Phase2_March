import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductMobileListComponent } from './product-mobile-list/product-mobile-list.component';
import { ProductLaptopListComponent } from './product-laptop-list/product-laptop-list.component';
import { ProductMobileDetailComponent } from './product-mobile-detail/product-mobile-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ProductListComponent,
    ProductMobileListComponent,
    ProductLaptopListComponent,
    ProductMobileDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
