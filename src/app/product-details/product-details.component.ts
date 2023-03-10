import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, productList } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  product: Product | undefined;

  constructor(private route: ActivatedRoute,
    private cartService: CartService) {
    
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'))

    this.product = productList.find(product => product.id === productId);
  }

  buy(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Product ' + product.name + ' has been added to the cart.');
  }
}
