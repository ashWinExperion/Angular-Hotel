import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingComponent } from '../booking/booking.component';
import { Bookings } from './bookings';
import{Customer} from '../shared/customer'

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  formData=new Bookings;
  customerList:Customer[];
  roomLis:any;

  constructor(private httpClient:HttpClient) { }

  deleteBook(id):Observable<any>{
      return  this.httpClient.delete("https://localhost:44338/api/bookings/"+id);
  }

  getAllRoomBookedBetween():Observable<any>
  {
    return this.httpClient.get("https://localhost:44338/api/bookings/roomListBetween");
  }

  getAllBookingDetails():Observable<any>
  {
    return this.httpClient.get("https://localhost:44338/api/bookings/roomBookedDetails");
  }
  getAllBooking():Observable<any>{
    return this.httpClient.get("https://localhost:44338/api/bookings");
  }

  getAllRoomWithCatAdvance():Observable<any>
  {
    return this.httpClient.get("https://localhost:44338/api/categories/getCatWiseAdvPaid");
  }


  bindListCustomer(){
    this.httpClient.get("https://localhost:44338/api/customers")
    .toPromise().then(
      response=>{
        this.customerList= response as Customer[];
        console.log(this.customerList);
      }
    )
  }

  getBookingById(id):Observable<any>
  {
    return this.httpClient.get("https://localhost:44338/api/bookings/"+id);
  }

  insertBooking(bk:Bookings):Observable<any>{
    return this.httpClient.post("https://localhost:44338/api/bookings",bk);
  }

  updateBookRecord(bk:Bookings){
    return this.httpClient.put("https://localhost:44338/api/bookings",bk);
  }
  
  bindListRoomsWithCat(){
    this.httpClient.get("https://localhost:44338/api/rooms/getCatWithRoom")
    .toPromise().then(
      response=>{
        this.roomLis= response
        console.log(this.roomLis);
      }
    )
  }
}
