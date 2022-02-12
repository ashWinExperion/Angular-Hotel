import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { CurdBookingComponent } from './curd-booking/curd-booking.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"admin",component:AdminComponent,
  children: [
    {
      path:'booking', component: BookingComponent
    },
    {path:"curd",component:CurdBookingComponent},
    {path:"curd/:Id",component:CurdBookingComponent},
    {path:"report",component:ReportComponent}
  ],
  canActivate:[AuthGuard],data:{role:'1'}
  },
  {path:"login",component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
