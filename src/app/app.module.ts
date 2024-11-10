import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './public/home/home.component';
import { NavbarComponent } from './public/layout/navbar/navbar.component';
import { FooterComponent } from './public/layout/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NotfindComponent } from './notfind/notfind.component';
import { ContactComponent } from './public/contact/contact.component';
import { PricingComponent } from './public/pricing/pricing.component';
import { ShoppingComponent } from './public/shopping/shopping.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    NotfindComponent,
    ContactComponent,
    PricingComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule, NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
