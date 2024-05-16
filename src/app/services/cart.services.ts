import { Injectable } from '@angular/core';
import { Product } from '../home/home.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = [];

  constructor() { }

  addToCart(product: Product): void {
    this.cartItems.push(product);
    console.log('Cart Items after adding:', this.cartItems);
  }
  

  getCartItems(): Product[] {
  return this.cartItems;
  }

  removeFromCart(product: Product): void {
    const index = this.cartItems.findIndex(item => item === product);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      console.log('Item removed from cart:', product);
    }
  }

  clearCart(): void {
    this.cartItems = [];
    console.log('Cart cleared');
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
