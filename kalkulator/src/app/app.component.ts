import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
             <h1>{{title}}</h1>
                <div class="col-xs-3"></div>
                <div class="col-xs-6" *ngIf="!showInput">
                <ul>
                    <li *ngFor="let formula of formulas">
                        <input type="radio" name="formula" [(ngModel)]="count.formulaVal" value="{{formula}}">{{formula}}
                    </li>
                </ul>
                <select #t (change)="changeFigure(t.value)">
                    <option *ngFor="let figure of geometric_figure">
                        {{figure}}
                    </option>    
                </select>
                </div>
                <div class="col-xs-6" *ngIf="showInput">
                    <div class="col-xs-12" *ngIf="count.formulaVal === 'circuit'">Obwód
                    <div class="col-xs-9" *ngIf="count.figureVal === 'Koło'">
                    Promień: <input [(ngModel)]="variable" value="{{variable}}">
                    <button (click)="resultCircuitCircle()">Policz obwód</button>
                    </div>
                    <div class="col-xs-9" *ngIf="count.figureVal === 'Kwadrat'">
                    Bok: <input [(ngModel)]="variable" value="{{variable}}">
                    <button (click)="resultCircuitSquare()">Policz obwód</button>
                    </div>
                    <div class="col-xs-9" *ngIf="count.figureVal === 'Prostokąt'">
                    Bok a: <input [(ngModel)]="variable" value="{{variable}}">
                    Bok b: <input [(ngModel)]="variableB" value="{{variableB}}">
                    <button (click)="resultCircuitRectangle()">Policz obwód</button>
                    </div>
                    </div>
                    <div class="col-xs-12" *ngIf="count.formulaVal === 'area'">Pole
                    <div class="col-xs-9" *ngIf="count.figureVal === 'Koło'">
                    Promień: <input [(ngModel)]="variable" value="{{variable}}">
                    <button (click)="resultAreaCircle()">Policz pole</button>
                    </div>
                    <div class="col-xs-9" *ngIf="count.figureVal === 'Kwadrat'">
                    Bok: <input [(ngModel)]="variable" value="{{variable}}">
                    <button (click)="resultAreaSquare()">Policz pole</button>
                    </div>
                    <div class="col-xs-9" *ngIf="count.figureVal === 'Prostokąt'">
                    Bok a: <input [(ngModel)]="variable" value="{{variable}}">
                    Bok b: <input [(ngModel)]="variableB" value="{{variableB}}">
                    <button (click)="resultAreaRectangle()">Policz pole</button>
                    </div>
                    </div>
                    Wynik: <input [(ngModel)]="result" value="{{result}}">
                </div>
                <button (click)="toggleInput()">{{showInput ? "Wróc do wyboru" : "Przejdź do obliczeń"}}</button>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  count;
  geometric_figure : string[];
  formulas : string[];
  showInput : boolean;
  variable : number;
  variableB : number;
  result : number;


constructor(){
  this.title = 'app works!';
  this.count = {
    formulaVal : 'area',
    figureVal : 'Kwadrat'
  };
  this.geometric_figure = ['Wybierz', 'Koło', 'Kwadrat', 'Prostokąt'];
  this.formulas = ['circuit', 'area'];
  this.showInput = false;
  this.variable = 0;
  this.variableB = 0;
  this.result = 0;
}

  changeFigure(value) {
  this.count.figureVal = value;
}

  toggleInput(){
    if (this.showInput == true){
      this.showInput = false;
      this.variable = 0;
      this.variableB = 0;
      this.result = 0;
    } else {
      this.showInput = true;
    }
  }

  resultCircuitCircle(){
    this.result = 2 * Math.PI * this.variable;
  }

  resultCircuitSquare(){
    this.result = this.variable * 4;
  }

  resultCircuitRectangle() {
    this.result = this.variable * 2 + this.variableB * 2;
  }

  resultAreaCircle(){
    this.result = Math.PI * Math.pow(this.variable, 2);
  }

  resultAreaSquare(){
    this.result = Math.pow(this.variable, 2);
  }

  resultAreaRectangle(){
    this.result = this.variable * this.variableB;
  }
}
