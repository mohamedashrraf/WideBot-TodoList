import { TodoService } from './../services/todo.service';
import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatButton, MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [ FormsModule, CommonModule,
    MatButton, MatButtonModule, MatDividerModule, MatIconModule,
    MatInputModule,
    MatListModule,
    MatDialogModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {

  newTodo: string = '';
  todos$: Observable<string[]>;
  todo: any;

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.todos$;
  }

  ngOnInit(): void {}

  addTodo(): void {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo.trim());
      this.newTodo = '';
    }
  }

  removeTodo(todo: string): void {
    this.todoService.removeTodo(todo);
  }

  clearTodo(): void {

            this.todoService.clearTodos();

  }
}
