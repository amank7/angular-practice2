import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FormComponent,
    ReactiveFormsModule,
    ChildComponent,
    SiblingComponent,
    HttpClientModule,
  ],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a><br/><br/>
    <div> <input type="text" [(ngModel)]=age/></div>
    {{age}}

    ChildData:{{dataTakenFromChild}}
   <hr/><hr/>
   <app-child [dataFromParent]='age' (dataFromChild)='getChildData($event)'>
   <p #contentBetweenSelectors>trying ng-content thing!</p>
   </app-child>
   <app-sibling></app-sibling>
  `,
})
export class App {
  name = 'Angular';
  age = '';
  dataTakenFromChild: string;

  getChildData(event: string) {
    this.dataTakenFromChild = event;
  }
}

bootstrapApplication(App);
