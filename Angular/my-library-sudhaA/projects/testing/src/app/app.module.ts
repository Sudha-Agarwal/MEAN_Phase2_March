import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyLibrarySudhaAModule } from 'my-library-sudhaA';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyLibrarySudhaAModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
