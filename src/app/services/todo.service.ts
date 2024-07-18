import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

function isLocalStorageAvailable(): boolean {
  try {
    const testKey = '__localStorageTest__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {

 private todosSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  todos$ = this.todosSubject.asObservable();

  constructor() {
    if (isLocalStorageAvailable()) {
      const savedTodos = localStorage.getItem('todos');
      if (savedTodos) {
        this.todosSubject.next(JSON.parse(savedTodos));
      }

      this.todos$.subscribe(todos => {
        localStorage.setItem('todos', JSON.stringify(todos));
      });
    }
  }

  addTodo(todo: string): void {
    const currentTodos = this.todosSubject.value;
    this.todosSubject.next([...currentTodos, todo]);
    if (isLocalStorageAvailable()) {
      localStorage.setItem('todos', JSON.stringify(this.todosSubject.value));
    }
  }

  removeTodo(todo: string): void {
    const currentTodos = this.todosSubject.value.filter(t => t !== todo);
    this.todosSubject.next(currentTodos);
    if (isLocalStorageAvailable()) {
      localStorage.setItem('todos', JSON.stringify(this.todosSubject.value));
    }
  }

  clearTodos(): void {
    this.todosSubject.next([]);
    if (isLocalStorageAvailable()) {
      localStorage.removeItem('todos');
    }
  }
}
