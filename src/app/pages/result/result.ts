import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { HousePlan } from '../../services/house-plan';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './result.html',
  styleUrl: './result.css'
})
export class Result {

  plan: any;

  constructor(
    private housePlan: HousePlan,
    private router: Router
  ) {
    this.plan = this.housePlan.getPlan();
  }

  goBack() {
    this.router.navigate(['/design']);
  }

  goHome() {
    this.router.navigate(['/']);
  }
}