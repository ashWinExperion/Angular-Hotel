import { Component, OnInit } from '@angular/core';
import{HotelService} from '../shared/hotel.service'
import{BookingDetails} from '../shared/booking-details'
import { Router } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  page=1;
  filter="";
  listBooking:BookingDetails[];
  constructor(private hotelService:HotelService,
    private router:Router) { }

  ngOnInit(): void {
    
   this.loadList();
  }

  loadList(){
    this.hotelService.getAllBookingDetails().subscribe(result=>{
      this.listBooking=result as BookingDetails[];
      console.log(this.listBooking);
    })
  }

  editBooking(id){
    alert(id);
    this.router.navigate(['admin/curd',id])
  }

  deleteBooking(id)
  {
    if(confirm("Are U Sure..!!?")){
      this.hotelService.deleteBook(id).subscribe(result=>{
        console.log(result);
        this.loadList();
      })
      
    }
   
  }



}
