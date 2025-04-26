import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  currentInput = '0';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitForSecondNumber = false;

      public getNumber(v: string) {
        if (this.waitForSecondNumber) {
          this.currentInput = v;
          this.waitForSecondNumber = false;
        } else {
          this.currentInput === '0' ? this.currentInput = v : this.currentInput += v;
        }
      }

}
