import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { SliderModule } from 'primeng/slider';

@Component({
  selector: 'app-home-equity-calculator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputNumberModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    DividerModule,
    SliderModule
  ],
  templateUrl: './home-equity-calculator.component.html',
  styleUrls: ['./home-equity-calculator.component.scss']
})
export class HomeEquityCalculatorComponent implements OnInit {
  // Input ranges
  homeValueMin: number = 100000;
  homeValueMax: number = 1000000;
  mortgageMin: number = 0;
  mortgageMax: number = 900000;
  loanAmountMin: number = 10000;
  loanAmountMax: number = 500000;
  interestRateMin: number = 3;
  interestRateMax: number = 15;
  loanTermMin: number = 5;
  loanTermMax: number = 30;

  // Input values
  homeValue: number = 300000;
  currentMortgage: number = 200000;
  loanAmount: number = 50000;
  interestRate: number = 7.5;
  loanTerm: number = 10;
  monthlyPayment: number = 0;
  totalInterest: number = 0;
  totalPayment: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.calculateLoan();
  }

  calculateLoan(): void {
    // Convert annual interest rate to monthly
    const monthlyRate = this.interestRate / 100 / 12;
    const numberOfPayments = this.loanTerm * 12;

    // Calculate monthly payment using the loan payment formula
    this.monthlyPayment = (this.loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    // Calculate total payment and interest
    this.totalPayment = this.monthlyPayment * numberOfPayments;
    this.totalInterest = this.totalPayment - this.loanAmount;
  }

  get availableEquity(): number {
    return this.homeValue - this.currentMortgage;
  }

  get loanToValueRatio(): number {
    return ((this.currentMortgage + this.loanAmount) / this.homeValue) * 100;
  }

//   // Update handlers for range inputs
//   onHomeValueRangeChange(event: Event): void {
//     const input = event.target as HTMLInputElement;
//     this.homeValue = parseInt(input.value);
//     this.calculateLoan();
//   }

//   onMortgageRangeChange(event: Event): void {
//     const input = event.target as HTMLInputElement;
//     this.currentMortgage = parseInt(input.value);
//     this.calculateLoan();
//   }

//   onLoanAmountRangeChange(event: Event): void {
//     const input = event.target as HTMLInputElement;
//     this.loanAmount = parseInt(input.value);
//     this.calculateLoan();
//   }

//   onInterestRateRangeChange(event: Event): void {
//     const input = event.target as HTMLInputElement;
//     this.interestRate = parseFloat(input.value);
//     this.calculateLoan();
//   }

//   onLoanTermRangeChange(event: Event): void {
//     const input = event.target as HTMLInputElement;
//     this.loanTerm = parseInt(input.value);
//     this.calculateLoan();
//   }
} 