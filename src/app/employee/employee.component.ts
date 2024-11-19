import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  inputs: ['Pdata'],
  outputs: ['childevent']
})
export class EmployeeComponent {
  Pdata: any;

  childevent = new EventEmitter();
  onchange(val:any){
    console.log(val);
    this.childevent.emit(val);
    
  }

}
