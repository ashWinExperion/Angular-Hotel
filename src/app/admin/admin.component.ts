import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  loggedUser:string;
  constructor(private authService:AuthService,private router:Router,private toaster:ToastrService) { }
  ngOnInit(): void {
    
      this.toaster.success("Loged-In", "Admin");
      this.loggedUser=localStorage.getItem("USERNAME");
  }
//logout
logOut(){
  this.authService.logOut();
  this.router.navigateByUrl('login');
}

}
