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
                    <option *ngFor="let figures of all_figures">
                        <p  *ngIf="count.formulaVal === figures.figure_formula">{{figures.figure}}</p>
                    </option>    
                </select>
                </div>
                <div class="col-xs-6 center_column" *ngIf="count.figureVal !== 'Wybierz'">
                    <div class="col-xs-12 input_field" *ngFor="let figures of all_figures">
                        <div class="col-xs-3 text_field" *ngIf="(count.figureVal === figures.figure) && (count.formulaVal === figures.figure_formula)">
                            <p>{{figures.figure_title}}</p>
                            
                        </div>
                        <div class="col-xs-9 value_field" *ngIf="(count.figureVal === figures.figure) && (count.formulaVal === figures.figure_formula)">
                            <p *ngFor="let inputFigure of figures.figure_fields">{{inputFigure}}<input [(ngModel)]="variable" value="{{variable}}"></p>
                            <button (click)='figures.figure_result +"()"'>{{figures.figure_count}}</button>
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
    id : '1',
    figure : 'Koło',
    figure_formula : 'Obwód',
    figure_title : 'Liczymy Obwód koła',
    figure_fields : ['Promień koła'],
    figure_count : 'Oblicz obwód',
    figure_result : 'resultCircuitCircle'
  },{
    id : '2',
    figure : 'Kwadrat',
    figure_formula : 'Obwód',
    figure_title : 'Liczymy Obwód Kwadratu',
    figure_fields : ['Długość boku'],
    figure_count : 'Oblicz obwód',
    figure_result : 'resultCircuitSquare'
  },{
    id : '3',
    figure : 'Prostokąt',
    figure_formula : 'Obwód',
    figure_title : 'Liczymy Obwód Prostokąta',
    figure_fields : ['Długość boku A', 'Długość boku B'],
    figure_count : 'Oblicz obwód',
    figure_result : 'resultCircuitRectangle'
  },{
    id : '4',
    figure : 'Koło',
    figure_formula : 'Pole',
    figure_title : 'Liczymy Pole koła',
    figure_fields : ['Promień koła'],
    figure_count : 'Oblicz pole',
    figure_result : 'resultAreaCircle'
  },{
    id : '5',
    figure : 'Kwadrat',
    figure_formula : 'Pole',
    figure_title : 'Liczymy Pole Kwadratu',
    figure_fields : ['Długość boku'],
    figure_count : 'Oblicz pole',
    figure_result : 'resultAreaSquare'
  },{
    id : '6',
    figure : 'Prostokąt',
    figure_formula : 'Pole',
    figure_title : 'Liczymy Pole Prostokąta',
    figure_fields : ['Długość boku A', 'Długość boku B'],
    figure_count : 'Oblicz pole',
    figure_result : 'resultAreaRectangle'
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
