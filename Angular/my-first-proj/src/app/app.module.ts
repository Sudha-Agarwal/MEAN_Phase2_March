import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductMobileListComponent } from './product-mobile-list/product-mobile-list.component';
import { ProductLaptopListComponent } from './product-laptop-list/product-laptop-list.component';
import { ProductMobileDetailComponent } from './product-mobile-detail/product-mobile-detail.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { JsonDataComponent } from './json-data/json-data.component';
import { QuizComponent } from './quiz/quiz.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ProductListComponent,
    ProductMobileListComponent,
    ProductLaptopListComponent,
    ProductMobileDetailComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    JsonDataComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
