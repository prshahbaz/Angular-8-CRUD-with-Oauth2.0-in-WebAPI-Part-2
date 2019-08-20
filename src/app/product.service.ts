import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { ProductDTO } from '../app/ProductDTO';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ApiUrl='http://localhost:49978/';
  constructor(private httpclient: HttpClient) { }

  GetEmployees():Observable<ProductDTO[]>{
  return this.httpclient.get<ProductDTO[]>(this.ApiUrl+'Api/Employee/GetEmployees');
  }

  GetEmployeeById(Id:string):Observable<ProductDTO>{
   // let Id=new HttpParams().set("Id",EmployeeId);
    return this.httpclient.get<ProductDTO>(this.ApiUrl+'Api/Employee/GetEmployeeById/'+Id);
  }
   InsertEmployee(employee:ProductDTO){
   return this.httpclient.post<ProductDTO>(this.ApiUrl+'Api/Employee/InsertEmployee',employee);
}

  UpdateEmployee(employee:ProductDTO):Observable<ProductDTO>{
    return this.httpclient.put<ProductDTO>(this.ApiUrl+'Api/Employee/UpdateEmployee/',employee);
  }

  DeleteEmployee(Id:string){
    return this.httpclient.delete(this.ApiUrl+'Api/Employee/DeleteEmployee/'+Id);
  }

  UserAuthentication(UserName: string,Password: string):Observable<any>{
   let credentials='username=' +UserName  + '&password=' +Password +'&grant_type=password'; 
   var reqHeader = new HttpHeaders({'Access-Control-Allow-Origin':'*','Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
  return this.httpclient.post<any>(this.ApiUrl+'token',encodeURI(credentials),{headers:reqHeader});
}
}
