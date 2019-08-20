import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('userToken')!=null){
      this.router.navigate(['/Product']);
    }
  } 
  LoginForm=new FormGroup({
    UserName: new FormControl('',Validators.required),
    Password: new FormControl('',Validators.required),
   }); 
 OnGetToken(){
   const user=this.LoginForm.controls['UserName'].value;
   const pass=this.LoginForm.controls['Password'].value;
  this.productService.UserAuthentication(user,pass).subscribe((data:any)=>{
  localStorage.setItem('userToken',data.access_token);
  this.router.navigate(['/Product']);
  });
  }
}
