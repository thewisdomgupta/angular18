import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {

  employees: any[] = [
    {id: 1, name: 'Jack', department: 'HR'},
    {id: 2, name: 'Alisha', department: 'Development'},
    {id: 3, name: 'Rauf', department: 'Marketing'},
    {id: 4, name: 'Shivam', department: 'Sales'},
    {id: 5, name: 'Raghav', department: 'HR'},
    {id: 6, name: 'Sheetal', department: 'Accounts'},
    {id: 7, name: 'Aashima', department: 'Development'},
    {id: 8, name: 'Sundar', department: 'Marketing'},
    {id: 9, name: 'Milind', department: 'Digital Marketing'},
    {id: 10, name: 'Punit', department: 'HR'}
  ]

}
