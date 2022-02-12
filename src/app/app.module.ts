import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import {AuthGuard} from './shared/auth.guard';
import {AuthInterceptor} from './shared/auth.interceptor';
import { CurdBookingComponent } from './curd-booking/curd-booking.component';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    BookingComponent,
    CurdBookingComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private router:Router){}
  canActivate(next: ActivatedRouteSnapshot):boolean{
    //check role
    const expectedRole=next.data.role;
    const currentRole=localStorage.getItem("USERROLE");
    alert(currentRole);
    alert(expectedRole);
    if(currentRole!==expectedRole)
    {
      this.router.navigateByUrl("/");
    }
    return true;
  }

 }
