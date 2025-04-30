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

      getDecimal() {
        if (!this.currentInput.includes('.')) {
          this.currentInput += '.';
        }
      }
    
      private doCalculation(op: string, secondOp: number) {
        switch (op) {
          case '+':
            return this.firstOperand! + secondOp;
          case '-':
            return this.firstOperand! - secondOp;
          case '*':
            return this.firstOperand! * secondOp;
          case '/':
            return this.firstOperand! / secondOp;
          default:
            return secondOp;
        }
      }
    
      public getOperation(op: string) {
        if (this.firstOperand === null) {
          this.firstOperand = Number(this.currentInput);
        } else if (this.operator) {
          const result = this.doCalculation(this.operator, Number(this.currentInput));
          this.currentInput = String(result);
          this.firstOperand = result;
        }
        this.operator = op;
        this.waitForSecondNumber = true;
      }
    
      public clear() {
        this.currentInput = '0';
        this.firstOperand = null;
        this.operator = null;
        this.waitForSecondNumber = false;
      }
}
