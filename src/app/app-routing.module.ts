import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { NotfindComponent } from './components/notfind/notfind.component';

const routes: Routes = [
  {path:'',
  component:HomeComponent},

  {path:'**',
  component:NotfindComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
