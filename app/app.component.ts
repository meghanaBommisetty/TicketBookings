import { Component } from '@angular/core';

export class Person{
   
  fromdest: string;
  todest: string;
  fromdate:date;
  todate:date;
  name:string;
  gender:string;
  mobilenumber:number;
  email:string;
}
@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent { }