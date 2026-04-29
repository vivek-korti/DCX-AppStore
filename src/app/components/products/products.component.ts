import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // CRITICAL: Required for *ngFor

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productList = [
  // Make sure the filename matches your folder exactly (e.g., .jpg vs .png)
  { name: 'Samsung Galaxy S24 Ultra', price: 699.99, reviews: 15, image: 'assets/images/samsung.jpg' },
  { name: 'Xbox One', price: 399.99, reviews: 8, image: 'assets/images/xbox.jpg' },
  { name: 'Playstation 4', price: 699.99, reviews: 4, image: 'assets/images/ps4.jpg' },
  { name: 'oneplus CE6 Lite', price: 699.99, reviews: 15, image: 'assets/images/oneplus.png' },
  { name: 'iphone 18 Fold', price: 599.99, reviews: 22, image: 'assets/images/iphone18_fold.png' },
  { name: 'Asus S15 OLed', price: 399.99, reviews: 14, image: 'assets/images/asus_s15.png' }
];
}