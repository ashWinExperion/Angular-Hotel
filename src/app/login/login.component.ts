import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from "../shared/auth.service";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted=false;
  errors='';
  loginUser: any;
  constructor(private formBuilder : FormBuilder,
    private toaster:ToastrService,
     private router:Router,
     private authService:AuthService) {}

  ngOnInit():void {
      this.loginForm=this.formBuilder.group({ 
        UserName:['',[Validators.required]],
        UserPassword:['',[Validators.required]] } );
  }

  get formControls() {
      return this.loginForm.controls;
  }

  loginCredentials() {
      this.isSubmitted=true;
      
      if(this.loginForm.invalid)
      {
        return;
      }
      if(this.loginForm.valid)
      {
        this.authService.loginVerify(this.loginForm.value).subscribe(data=>{
          console.log(data);
          this.loginUser=data;
         
          this.toaster.success("Login","Successfull");
          if(this.loginUser.RoleId==1)
          {

            localStorage.setItem('USERNAME',this.loginUser.UserName);
            localStorage.setItem('USERROLE',this.loginUser.RoleId);
            sessionStorage.setItem('USERNAME',this.loginUser.UserName);
            sessionStorage.setItem('JwtTOKEN',this.loginUser.Token);

            this.router.navigateByUrl('/admin');
          }
          else if(this.loginUser.RoleId==2)
          {
            localStorage.setItem('USERNAME',this.loginUser.UserName);
            localStorage.setItem('USERROLE',this.loginUser.RoleId);
            sessionStorage.setItem('USERNAME',this.loginUser.UserName);
            sessionStorage.setItem('JwtTOKEN',this.loginUser.Token);
            
            this.router.navigateByUrl('/manager');
          }
          else
          {
            localStorage.setItem('USERNAME',this.loginUser.UserName);
            localStorage.setItem('USERROLE',this.loginUser.RoleId);
            sessionStorage.setItem('USERNAME',this.loginUser.UserName);
            sessionStorage.setItem('JwtTOKEN',this.loginUser.Token);
            
            this.router.navigateByUrl('/home');
          }
        },
        error=>{
          this.errors="Invalid username or Password"
        });
      }

  }
}
