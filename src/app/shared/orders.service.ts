import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }

  form = new FormGroup({
    orderDate: new FormControl(""),
    orderNumber: new FormControl(""),
    customerEmail: new FormControl(""),
    shirtSize: new FormControl(""),
    youthM: new FormControl(""),
    herXS: new FormControl(""),
    herS: new FormControl(""),
    herM: new FormControl(""),
    herL: new FormControl(""),
    herXL: new FormControl(""),
    hisXS: new FormControl(""),
    hisS: new FormControl(""),
    hisM: new FormControl(""),
    hisL: new FormControl(""),
    hisXL: new FormControl(""),
    hisXXL: new FormControl(""),
    adoptHatchling: new FormControl(""),
    adoptNest: new FormControl(""),
    generalDonation: new FormControl(""),
    completed: new FormControl("")
  });

}
