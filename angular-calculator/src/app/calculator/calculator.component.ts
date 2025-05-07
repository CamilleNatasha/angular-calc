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
  memory: number=0;

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
          case '^':
            return Math.pow(this.firstOperand!, secondOp);
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
    
      // Advanced functions
      public calculatePercentage() {
        if (this.firstOperand !== null && this.operator) {
          const percentage = this.firstOperand * (Number(this.currentInput) / 100);
          this.currentInput = String(percentage);
          this.waitForSecondNumber = true;
        } else {
          this.currentInput = String(Number(this.currentInput) / 100);
        }
      }

      public calculateSquareRoot() {
        this.currentInput = String(Math.sqrt(Number(this.currentInput)));
      }

      public calculatePower() {
        this.currentInput = String(Math.pow(Number(this.currentInput), 2));
      }

      public calculateInverse() {
        this.currentInput = String(1 / Number(this.currentInput));
      }

      public toggleSign() {
        this.currentInput = String(-Number(this.currentInput));
      }

      //Memory functions
    public memoryAdd() {
      this.memory += Number(this.currentInput);
    }

    public memorySubtract() {
      this.memory -= Number(this.currentInput);
    }

    public memoryRecall() {
      this.currentInput = String(this.memory);
    }

    public memoryClear () {
      this.memory = 0;
    }

    public clear() {
      this.currentInput = '0';
      this.firstOperand = null;
      this.operator = null;
      this.waitForSecondNumber = false;
    }
  
    public clearEntry() {
      this.currentInput = '0';
    }
}
