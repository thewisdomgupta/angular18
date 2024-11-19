import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces: true
})
export class AppComponent {
  title = 'angularApp';
  Cdata: any;
  isValid = false;
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
