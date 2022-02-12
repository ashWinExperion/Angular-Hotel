import { Component, OnInit } from '@angular/core';
import { HotelService } from '../shared/hotel.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  listCatRoom;
  roomsBookedBetween;
  constructor(public hotelService:HotelService) { }

  ngOnInit(): void {
    this.loadReport();
  }

  loadReport(){
    this.hotelService.getAllRoomWithCatAdvance().subscribe(result=>{
      this.listCatRoom=result ;
      console.log(this.listCatRoom);
    })

    this.hotelService.getAllRoomBookedBetween().subscribe(result=>{
      this.roomsBookedBetween=result ;
      console.log(this.roomsBookedBetween);
    })
  }

}
