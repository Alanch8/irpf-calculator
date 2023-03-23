import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'irpf-Form';

  annualIncome: number;
  personalPlan: number;
  businessPlan: number;
  result: number;
  retentionFigure: number;

  constructor() {
  this.annualIncome = 0;
  this.personalPlan = 0;
  this.businessPlan = 0;
  this.result = 0;
  this.retentionFigure = 0;
  }

  calculate() {
    if (this.annualIncome <= 12450) {
      this.result = (this.personalPlan + this.businessPlan) * 0.19;
    } else if (this.annualIncome >= 12451 && this.annualIncome <= 20199) {
      this.result = (this.personalPlan + this.businessPlan) * 0.24;
    } else if (this.annualIncome >= 20200 && this.annualIncome <= 35199) {
      this.result = (this.personalPlan + this.businessPlan) * 0.3;
    } else if (this.annualIncome >= 35200 && this.annualIncome <= 59999) {
      this.result = (this.personalPlan + this.businessPlan) * 0.37;
    } else if (this.annualIncome >= 60000 && this.annualIncome <= 299999) {
      this.result = (this.personalPlan + this.businessPlan) * 0.45;
    } else if (this.annualIncome >= 300000){
      this.result = (this.personalPlan + this.businessPlan) * 0.47;
    }
      throw new Error('Method not implemented.')
  }
  }