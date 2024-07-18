import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TodoListComponent,
        MatDialogModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatListModule,
        MatIconModule,
        FormsModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a todo', () => {
    component.newTodo = 'Test Todo';
    component.addTodo();
    expect(component.todo).toContain('Test Todo');
  });

  it('should remove a todo', () => {
    component.todo = ['Test Todo'];
    component.removeTodo('Test Todo');
    expect(component.todo).not.toContain('Test Todo');
  });

  it('should clear all todo', () => {
    component.todo = ['Test Todo'];
    component.clearTodo();
    expect(component.todo).toEqual([]);
  });
});
