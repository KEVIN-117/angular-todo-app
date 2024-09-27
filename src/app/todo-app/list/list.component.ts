import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgClass
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  total: number= 0
  completed: number = 0
  pending: number= 0
  todos: any[] = [
    {
      id: 1,
      title: 'Learn Angular',
      completed: false
    },
    {
      id: 2,
      title: 'Learn React',
      completed: false
    },
    {
      id: 3,
      title: 'Learn Vue',
      completed: true
    }
  ]

  handleValue: FormControl = new FormControl('', {
    nonNullable: true,
    validators:[
      Validators.required,
      Validators.minLength(3),
    ]
  })

}
