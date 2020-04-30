import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(public ordersService: OrdersService) { }

  ngOnInit(): void {
  }

  submitted = false;

  shirts = [
    "youthM",
    "herXS",
    "herS",
    "herM",
    "herL",
    "herXL",
    "hisXS",
    "hisS",
    "hisM",
    "hisL",
    "hisXL",
    "hisXXL"
  ];

  donations = [
    "$5",
    "$10",
    "$20",
    "other"
  ]

  shirtOrder = [];

  addShirt = shirt => this.shirtOrder.push(shirt);

  removeShirt = shirt => {
    let index = this.shirtOrder.indexOf(shirt);
    if (index > -1) this.shirtOrder.splice(index, 1);
  };

  donationOrder = [];

  addDonation = donation => this.donationOrder.push(donation);

  removeDonation = donation => {
    let index = this.donationOrder.indexOf(donation);
    if (index > -1) this.donationOrder.splice(index, 1);
  };
}
