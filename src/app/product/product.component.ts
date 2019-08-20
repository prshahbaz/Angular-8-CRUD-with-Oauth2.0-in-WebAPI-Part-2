import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductDTO } from '../ProductDTO';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.GetAllProducts();
  }
  ProductList:ProductDTO[];
  product:ProductDTO;
  productIdUpdate = null;
  ProductForm=new FormGroup({
    Name: new FormControl('',Validators.required),
    Price: new FormControl(''),
   }); 
   OnSubmit(){
    if(this.productIdUpdate==null){
       const product=this.ProductForm.value;
       this.InsertEmployee(product);
    }
    else{
       const employee=this.ProductForm.value;
       this.UpdateEmployee(employee);
    }
 }
 
 GetAllProducts(){
   
    this.productservice.GetProducts().subscribe(data=>{this.ProductList=data;});
 }
 GetProductById(Id:string){
    this.productservice.GetProductById(Id).subscribe(data=>{
       this.SetProductFormValues(data); 
    }); 
   
 }
 SetProductFormValues(product:ProductDTO){
  this.ProductForm.controls['Name'].setValue(product.Name);
  this.ProductForm.controls['Price'].setValue(product.Price);
  this.productIdUpdate=product.Id;
 }
 InsertEmployee(employee:ProductDTO){
    this.productservice.InsertProduct(employee).subscribe(()=>{
       this.GetAllProducts();
    });
 }
 UpdateEmployee(employee:ProductDTO){
 employee.Id=this.productIdUpdate;
  this.productservice.UpdateProduct(employee).subscribe(()=>{
    this.productIdUpdate=null;
    this.GetAllProducts();
  });
 }
 DeleteEmployee(Id:string){
  this.productservice.DeleteProduct(Id).subscribe(()=>{
    this.productIdUpdate=null;
    this.GetAllProducts();
  });
 }
}

