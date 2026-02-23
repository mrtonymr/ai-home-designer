import { Injectable } from '@angular/core';   // 👈 THIS LINE IS REQUIRED

@Injectable({
  providedIn: 'root'
})
export class HousePlan {

  private planData: any = null;

  setPlan(data: any) {
    this.planData = data;
  }

  getPlan() {
    return this.planData;
  }
}