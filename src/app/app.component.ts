// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { NavbarComponent } from './components/navbar/navbar.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, NavbarComponent], // Keep only what you actually use here
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent { }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// MAKE SURE THIS LINE HAS 'export'
export class AppComponent { 
  title = 'dcx-app-store';
}