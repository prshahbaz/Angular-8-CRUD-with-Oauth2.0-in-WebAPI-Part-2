import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent} from '../app/product/product.component';
import {LoginComponent} from '../app/login/login.component';

const routes: Routes = [
   {path:'Product', component:ProductComponent},
   {path:'Login', component:LoginComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
