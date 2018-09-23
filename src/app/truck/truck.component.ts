import { Component, OnInit } from '@angular/core';
import { TruckService } from '../api/truck-api.service';
import { DataSource } from '@angular/cdk/collections';


export class TruckDataSource extends DataSource<any> {
  constructor(private api: TruckService) {
    super();
  }

  connect() {
    return this.api.getTrucks();
  }

  disconnect() { }
}

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.css']
})
export class TruckComponent implements OnInit {

  trucks: any;
  displayedColumns = ['truckID', 'driverID', 'speed', 'longitude', 'latitude', 'zipCode', 'lastSeen'];
  dataSource = new TruckDataSource(this.api);

  constructor(private api: TruckService) { }

  ngOnInit() {
    this.api.getTrucks().subscribe(res => {
      console.log(res);
      this.trucks = res;
    }, err => {
      console.log(err);
    });
  }
}
