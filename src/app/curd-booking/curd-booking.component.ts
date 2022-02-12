import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../shared/hotel.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-curd-booking',
  templateUrl: './curd-booking.component.html',
  styleUrls: ['./curd-booking.component.scss']
})
export class CurdBookingComponent implements OnInit {

  bkId:number=0;

  constructor(public hotelService: HotelService,
    private route:ActivatedRoute,
    private toaster:ToastrService) { }

  ngOnInit(): void {

    this.hotelService.bindListCustomer();
    console.log(this.hotelService.roomLis);
    console.log(this.hotelService.customerList);
    this.hotelService.bindListRoomsWithCat();
    this.bkId=this.route.snapshot.params['Id'];
   
    if( this.bkId!=undefined)
    {
      this.hotelService. getBookingById(this.bkId).subscribe(result=>{
        console.log(result);
        var datePipe = new DatePipe("en-UK");
        let formatedDate=datePipe.transform(result.DateOfBook,'yyyy-MM-dd');
        result.DateOfBook=formatedDate;
        this.hotelService.formData=Object.assign({},result);
      });
    
    }
  }
  

  insertBookingForm(form?:NgForm){
    this.hotelService.insertBooking(form.value).subscribe((result)=>
      {
        console.log(result);
        this.toaster.success("Added", "Successfully..!!");
      }
      )
  }



  updateBookRecord(form?:NgForm){
    this.hotelService.updateBookRecord(form.value)
    .subscribe((result)=>
      {
        this.toaster.success("Updated", "Successfully..!!");
        console.log(result);
      }
      )
  }

  onSubmit(form:NgForm){
    console.log(form.value);

    let addId=this.hotelService.formData.BookId;
    if(addId==0||addId==null)
    {
      console.log(form);
      this.insertBookingForm(form);
    }
    else
    {
          this.updateBookRecord(form);
          this.resetForm();
    }
    // Insert or Update
  }

  resetForm(form?:NgForm)
  {
    if(form!=null)
    {
    
      form.resetForm();
    }
  }

}
