import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { ProductDTO } from '../app/ProductDTO';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ApiUrl='http://localhost:57046/';
  constructor(private httpclient: HttpClient) { }

  GetProducts():Observable<ProductDTO[]>{
  return this.httpclient.get<ProductDTO[]>(this.ApiUrl+'Api/Product/GetProducts');
  }

  GetProductById(Id:string):Observable<ProductDTO>{
    return this.httpclient.get<ProductDTO>(this.ApiUrl+'Api/Product/GetProductById/'+Id);
  }
   InsertProduct(product:ProductDTO){
   return this.httpclient.post<ProductDTO>(this.ApiUrl+'Api/Product/InsertProduct',product);
}

  UpdateProduct(product:ProductDTO):Observable<ProductDTO>{
    return this.httpclient.put<ProductDTO>(this.ApiUrl+'Api/Product/Updateproduct/',product);
  }

  DeleteProduct(Id:string){
    return this.httpclient.delete(this.ApiUrl+'Api/Product/DeleteProduct/'+Id);
  }

  UserAuthentication(UserName: string,Password: string):Observable<any>{
   let credentials='username=' +UserName  + '&password=' +Password +'&grant_type=password'; 
   var reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
  return this.httpclient.post<any>(this.ApiUrl+'token',encodeURI(credentials),{headers:reqHeader});
}
}
