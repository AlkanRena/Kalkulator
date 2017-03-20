import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
             <h1>{{title}}</h1>
                <div class="col-xs-3"></div>
                <div class="col-xs-6" *ngIf="!showInput">
                <ul>
                    <li *ngFor="let formula of formulas">
                        <input type="radio" name="formula" ngModel="{checked: count.formulaVal = '{{formula}}'}" checked>{{formula}}
                    </li>
                </ul>
                <select>
                    <option *ngFor="let figure of geometric_figure">
                        {{figure}}
                    </option>    
                </select>
                </div>
                <div class="col-xs-6" *ngIf="showInput">
                    <div class="col-xs-6" *ngIf="count.formulaVal === 'circuit'">Obwód</div>
                    <div class="col-xs-6" *ngIf="count.formulaVal === 'area'">Pole</div>
                    <input>
                    <input>
                    <input>
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
    formulaVal : 'circuit'
  };
  this.geometric_figure = ['Koło', 'Kwadrat', 'Prostokąt'];
  this.formulas = ['circuit', 'area'];
  this.showInput = false;


}



  toggleInput(){
    if (this.showInput == true){
      this.showInput = false;
    } else {
      this.showInput = true;
    }
  }
}
