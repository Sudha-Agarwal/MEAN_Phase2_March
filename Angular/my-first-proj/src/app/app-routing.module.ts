import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CourseParentComponent } from './course-parent/course-parent.component';
import { HomeComponent } from './home/home.component';
import { JsonDataComponent } from './json-data/json-data.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProductLaptopListComponent } from './product-laptop-list/product-laptop-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductMobileDetailComponent } from './product-mobile-detail/product-mobile-detail.component';
import { ProductMobileListComponent } from './product-mobile-list/product-mobile-list.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path:'product-list', component:ProductListComponent,
    children:[
      {path:'', redirectTo:'mobile-list', pathMatch:'full'},
      {path:'mobile-list', component: ProductMobileListComponent},
      {path:'mobile-detail/:id', component:ProductMobileDetailComponent},
      {path:'laptop-list', component: ProductLaptopListComponent}
    ]

},
{path:'login-form',component: LoginFormComponent},
{path:'registeration-form', component: RegistrationFormComponent},
{path:'json-data', component: JsonDataComponent},
{path:'quiz',component:QuizComponent},
{path:'parent',component:CourseParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
