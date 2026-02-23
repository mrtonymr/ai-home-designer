import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { HousePlan } from '../../services/house-plan';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './design.html',
  styleUrl: './design.css'
})
export class Design {

  // 🔹 Form model
  form = {
    bedrooms: 3,
    max_area: 1000,
    parking: true
  };

  // 🔹 UI state
  loading = false;
  error: string | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private housePlan: HousePlan
  ) {}

  // 🔹 Submit function
  generatePlan() {
    this.loading = true;
    this.error = null;

    this.http.post('http://127.0.0.1:8000/api/generate-plan', this.form)
      .subscribe({
        next: (response: any) => {
          // Store plan in service
          this.housePlan.setPlan(response);

          this.loading = false;

          // Navigate to result page
          this.router.navigate(['/result']);
        },
        error: (err) => {
          this.loading = false;

          if (err.error?.error) {
            this.error = err.error.error;
          } else {
            this.error = 'Failed to generate house plan. Please try again.';
          }
        }
      });
  }

}