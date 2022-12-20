import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Product[] = [];

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private cartService: CartService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.items = this.cartService.getCartItems();
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    window.alert('Your order has been submitted. Details - ' + 
      this.checkoutForm.value.name + " to " + this.checkoutForm.value.address);
    this.checkoutForm.reset();
  }
}
