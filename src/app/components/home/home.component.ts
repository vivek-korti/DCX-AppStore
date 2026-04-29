import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Sets the specific allowed keys
  currentView: 'featured' | 'bestseller' | 'discount' = 'featured';

  content: Record<'featured' | 'bestseller' | 'discount', { title: string, desc: string, image: string }> = {
    featured: {
      title: 'Apple iPhone 17 Pro Max',
      desc: 'The classic design that started a revolution. Sleek, powerful, and timeless.',
      image: 'assets/images/iphone6.png'
    },
    bestseller: {
      title: 'iPhone 18 Pro Max Foldable',
      desc: 'The ultimate power user device. Folding display with A20 chip technology.',
      image: 'assets/images/iphone18_fold.png'
    },
    discount: {
      title: 'Asus S 15 OLED Laptop',
      desc: 'Ultra-slim performance with a breathtaking 2.8K OLED display.',
      image: 'assets/images/asus_s15.png'
    }
  };

  changeView(view: 'featured' | 'bestseller' | 'discount') {
    this.currentView = view;
  }
}