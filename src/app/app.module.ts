import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { AuthInterceptor } from '../app/auth.interceptor';
import {enableProdMode} from '@angular/core';

enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductService
    ,
  {
   provide:HTTP_INTERCEPTORS,
   useClass:AuthInterceptor,
   multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
