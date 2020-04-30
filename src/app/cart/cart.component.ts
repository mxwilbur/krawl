import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';
import { OrdersComponent } from '../orders/orders.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public ordersService: OrdersService) { }

  ngOnInit(): void {
  }

  submitted = false;

}
