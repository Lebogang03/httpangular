import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [{path:"",component:WelcomeComponent},
                        {path:"login",component:LoginComponent},
                        {path:"menu",component:MenuComponent, 
                        children:[{path:"home",component:HomeComponent},
                        {path:"education",component:EducationComponent},
                                  {path:"contact",component:ContactComponent}]}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
