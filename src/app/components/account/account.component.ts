// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-account',
//   standalone: true,
//   templateUrl: './account.component.html',
//   styleUrl: './account.component.css'
// })
// export class AccountComponent { }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent { // START OF CLASS

  // All variables must be INSIDE these curly braces
  userData = {
    full_name: '',
    email: '',
    mobile: '',
    address_line1: '',
    address_line2: '',
    city: '',
    state: '',
    pin_code: ''
  };

  constructor(private http: HttpClient) {}

  onSave() {
    this.http.post('http://localhost:3000/api/save-user', this.userData)
      .subscribe({
        next: (res) => {
          console.log(res);
          alert('Data saved to MySQL successfully!');
        },
        error: (err) => {
          console.error('Saving failed', err);
          alert('Error saving data. Is your Node.js server running?');
        }
      });
  }

} // END OF CLASS
