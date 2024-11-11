import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfindComponent } from './notfind/notfind.component';
import { ContactComponent } from './public/contact/contact.component';
import { PricingComponent } from './public/pricing/pricing.component';
import { ShoppingComponent } from './public/shopping/shopping.component';
import { ServicesComponent } from './public/services/services.component';
import { LayoutComponent } from './component/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'shopping', component: ShoppingComponent },
      { path:'**',       component:NotfindComponent }
      // Add other routes here
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
