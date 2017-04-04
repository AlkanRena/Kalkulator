import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
             <h1>{{title}}</h1>
                <div class="col-xs-3 left_column"></div>
                <div class="col-xs-6 center_column" *ngIf="count.figureVal == 'Wybierz'">
                <ul>
                    <li *ngFor="let formula of formulas">
                        <input type="radio" name="formula" [(ngModel)]="count.formulaVal" value="{{formula}}">{{formula}}
                    </li>
                </ul>
                <select #t (change)="changeFigure(t.value)">
                    <option *ngFor="let figure of geometric_figure">
                        {{figure}}
                    </option>    
                </select>{{all_figures}}
                </div>
                <div class="col-xs-6 center_column" *ngIf="count.figureVal !== 'Wybierz'">
                    <div class="col-xs-12 input_field" *ngIf="count.formulaVal === 'Obwód'">
                    <div class="col-xs-3 text_field">
                        <p>Liczymy Obwód</p>
                        <p>{{count.figureVal}}</p>
                    </div>
                    <div class="col-xs-9 value_field" *ngIf="count.figureVal === 'Koło'">
                    <p>Promień koła: <input [(ngModel)]="variable" value="{{variable}}"></p>
                    <button (click)="resultCircuitCircle()">Policz obwód</button>
                    </div>
                    <div class="col-xs-9 value_field" *ngIf="count.figureVal === 'Kwadrat'">
                    <p>Długość boku: <input [(ngModel)]="variable" value="{{variable}}"></p>
                    <button (click)="resultCircuitSquare()">Policz obwód</button>
                    </div>
                    <div class="col-xs-9 value_field" *ngIf="count.figureVal === 'Prostokąt'">
                    <p>Długość boku a: <input [(ngModel)]="variable" value="{{variable}}"></p>
                    <p>Długość boku b: <input [(ngModel)]="variableB" value="{{variableB}}"></p>
                    <button (click)="resultCircuitRectangle()">Policz obwód</button>
                    </div>
                    </div>
                    <div class="col-xs-12 input_field" *ngIf="count.formulaVal === 'Pole'">
                    <div class="col-xs-3 text_field">
                        <p>Liczymy Pole</p>
                        <p>{{count.figureVal}}</p>
                    </div>
                    <div class="col-xs-9 value_field" *ngIf="count.figureVal === 'Koło'">
                    <p>Promień koła: <input [(ngModel)]="variable" value="{{variable}}"></p>
                    <button (click)="resultAreaCircle()">Policz pole</button>
                    </div>
                    <div class="col-xs-9 value_field" *ngIf="count.figureVal === 'Kwadrat'">
                    <p>Długość boku: <input [(ngModel)]="variable" value="{{variable}}"></p>
                    <button (click)="resultAreaSquare()">Policz pole</button>
                    </div>
                    <div class="col-xs-9 value_field" *ngIf="count.figureVal === 'Prostokąt'">
                    <p>Długość boku a: <input [(ngModel)]="variable" value="{{variable}}"></p>
                    <p>Długość boku b: <input [(ngModel)]="variableB" value="{{variableB}}"></p>
                    <button (click)="resultAreaRectangle()">Policz pole</button>
                    </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="result_field">
                        <p>Wynik:</p> 
                        <input [(ngModel)]="result" value="{{result}}">
                    </div>
                </div>
                <div class="col-xs-3 right_column">
                    <button (click)="toggleInput()">{{(count.figureVal !== 'Wybierz') ? "Wróc do wyboru" : "Aby przejść do obliczeń wybierz figurę"}}</button>
                </div>
                `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  count;
  all_figures;
  geometric_figure : string[];
  formulas : string[];
  variable : number;
  variableB : number;
  result : number;


constructor(){
  this.title = 'Kalkulator!';
  this.count = {
    formulaVal : 'Obwód',
    figureVal : 'Wybierz'
  };
  this.all_figures = [{
    figure : 'Koło',
    figure_formula : 'Obwód',
    figure_fields : 'Promień koła'
  },{
    figure : 'Kwadrat',
    figure_formula : 'Obwód',
    figure_fields : 'Długość boku'
  },{
    figure : 'Kwadrat',
    figure_formula : 'Obwód',
    figure_fields : 'Długość boku A',
    figure_fields_B : 'Długość boku B'
  },{
    figure : 'Koło',
    figure_formula : 'Pole',
    figure_fields : 'Promień koła'
  },{
    figure : 'Kwadrat',
    figure_formula : 'Pole',
    figure_fields : 'Długość boku'
  },{
    figure : 'Kwadrat',
    figure_formula : 'Pole',
    figure_fields : 'Długość boku A',
    figure_fields_B : 'Długość boku B'
  }];
  this.geometric_figure = ['Wybierz', 'Koło', 'Kwadrat', 'Prostokąt'];
  this.formulas = ['Obwód', 'Pole'];
  this.variable = 0;
  this.variableB = 0;
  this.result = 0;
}

  changeFigure(value) {
  this.count.figureVal = value;
}

  toggleInput(){
    if (this.count.figureVal !== 'Wybierz'){
      this.count.figureVal = 'Wybierz';
      this.variable = 0;
      this.variableB = 0;
      this.result = 0;
    } else {

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
