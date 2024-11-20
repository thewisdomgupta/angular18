import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DataComponent } from './data/data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeComponent, DataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces: true
})
export class AppComponent {
  title = 'angularApp';
  Cdata: any;
  isValid = false;
  name= 'Ram'
  getdata(val:any){
    this.Cdata=val;
  }

  login(){
    this.isValid = true;
  }

  logout(){
    this.isValid = false;
  }

}
