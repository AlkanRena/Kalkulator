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
                    Promień: <input>
                    </div>
                    <div class="col-xs-9" *ngIf="count.figureVal === 'Kwadrat'">
                    Bok: <input>
                    </div>
                    <div class="col-xs-9" *ngIf="count.figureVal === 'Prostokąt'">
                    Bok a: <input>
                    Bok b: <input>
                    </div>
                    </div>
                    <div class="col-xs-12" *ngIf="count.formulaVal === 'area'">Pole
                    <div class="col-xs-9" *ngIf="count.figureVal === 'Koło'">
                    Promień: <input>
                    </div>
                    <div class="col-xs-9" *ngIf="count.figureVal === 'Kwadrat'">
                    Bok: <input>
                    </div>
                    <div class="col-xs-9" *ngIf="count.figureVal === 'Prostokąt'">
                    Bok a: <input>
                    Bok b: <input>
                    </div>
                    </div>
                    Wynik: <input>
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


constructor(){
  this.title = 'app works!';
  this.count = {
    formulaVal : 'area',
    figureVal : 'Kwadrat'
  };
  this.geometric_figure = ['Wybierz', 'Koło', 'Kwadrat', 'Prostokąt'];
  this.formulas = ['circuit', 'area'];
  this.showInput = false;
}

  changeFigure(value) {
  this.count.figureVal = value;
}

  toggleInput(){
    if (this.showInput == true){
      this.showInput = false;
    } else {
      this.showInput = true;
    }
  }
}
