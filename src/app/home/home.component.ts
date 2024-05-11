import { Component } from '@angular/core';
import { CartService } from '../services/cart.services';

export class Product {
  public hovered: boolean = false;
  constructor(
    public name: string,
    public imageUrl: string,
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
    new Product('UI Design for beginners', '\assets\Placeholder 3.jpg', 24.92),
    new Product('VUE Javascript Course', '\assets\Placeholder 4.jpg', 24.92),
    new Product('Mobile DEV REACT Native', '\assets\Placeholder 5.jpg', 24.92),
    new Product('Website DEV Hero to Zero', '\assets\Placeholder 6.jpg', 24.92),
    new Product('Learn Programming in 30 days', '\assets\Placeholder 7.jpg', 24.92)
  ];

  message: string = '';
     
  constructor(private cartService: CartService) { }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.message = 'Product added to cart: ' + product.name;
  }

  handleClick(product: Product): void {
    this.addToCart(product);
  }
}
