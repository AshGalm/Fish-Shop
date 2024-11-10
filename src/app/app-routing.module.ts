import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfindComponent } from './notfind/notfind.component';
import { ContactComponent } from './public/contact/contact.component';
import { PricingComponent } from './public/pricing/pricing.component';
import { ShoppingComponent } from './public/shopping/shopping.component';

const routes: Routes = [
  {path:'',
  component:HomeComponent},
  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'shopping',
    component:ShoppingComponent
  },

  {
    path:'contact',
    component:ContactComponent
  },


  {
    path:'pricing',
    component:PricingComponent
  },

  {path:'**',
  component:NotfindComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
