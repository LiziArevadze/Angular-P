import { Component } from '@angular/core';
import { CartService } from '../services/cart.services';

export class Product {
  constructor(
    public name: string,
    public price: number
  ) {}
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  products: Product[] = [
    new Product('UI Design for beginners', 24.92),
    new Product('VUE Javascript Course', 24.92),
    new Product('Mobile DEV REACT Native', 24.92),
    new Product('Website DEV Hero to Zero', 24.92),
    new Product('Learn Programming in 30 days', 24.92)
  ];

  message: string = '';
     
  constructor(private cartService: CartService) { }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.message = 'Product added to cart: ' + product.name;
  }
}
