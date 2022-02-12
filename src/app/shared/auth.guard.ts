import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(next: ActivatedRouteSnapshot):boolean{
    //check role
    const expectedRole=next.data.role;
    const currentRole=localStorage.getItem("USERROLE");
   
    if(currentRole!==expectedRole)
    {
      this.router.navigateByUrl("/");
    }
    return true;
  }
  
  
}
