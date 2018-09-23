import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { TruckService } from '../api/truck-api.service';

@Component({
  selector: 'app-truck-create',
  templateUrl: './truck-create.component.html',
  styleUrls: ['./truck-create.component.css']
})
export class TruckCreateComponent implements OnInit {

  truckForm: FormGroup;
  truckID: Number = 0;
  driverID: Number = 0;
  longitude: Number = -72.31344;
  latitude: Number = -41.223;
  speed: Number = 10;
  state: String = 'MA';
  zipCode: String = '02122';

  constructor(private router: Router, private api: TruckService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.truckForm = this.formBuilder.group({
      'truckID' : [null, Validators.required],
      'driverID' : [null, Validators.required],
      'longitude' : [null, Validators.required],
      'latitude' : [null, Validators.required],
      'speed' : [null, Validators.required],
      'state' : [null, Validators.required],
      'zipCode' : [null, Validators.required],
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.postTruck(form)
      .subscribe(res => {
          const id = res['_id'];
          this.router.navigate(['/trucks']);
        }, (err) => {
          console.log(err);
        });
  }
}
