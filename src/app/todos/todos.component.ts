import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Todo } from './models/todo';
import { TodoService } from './services/todo.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {
// todos: Todo[];
unsubscription$ = new Subject();
todos$: Observable<Todo[]>;

constructor(private todoService: TodoService) { }

ngOnInit(): void {
  /* this.todoService.getTodos()
  .pipe(takeUntil(this.unsubscription$))
  .subscribe(data => {
    this.todos = data;
  }); */

  this.todos$ = this.todoService.getTodos();

  this.todoService.getTodo(2)
  .pipe(takeUntil(this.unsubscription$))
  .subscribe(data => {
    console.log(data);
  });

  this.todoService.createTodo(1, 'hello', 'this is my first todo')
  .pipe(takeUntil(this.unsubscription$))
  .subscribe(data => {
    console.log(data);
  });

  this.todoService.updateTodo(1, 1, 'updated todo', 'new body')
  .pipe(takeUntil(this.unsubscription$))
  .subscribe(data => {
    console.log('Updated todo -> ', data);
  });

  this.todoService.deleteTodo(1)
  .pipe(takeUntil(this.unsubscription$))
  .subscribe(data => {
    console.log('Deleted todo -> ', data);
  });
}

ngOnDestroy(): void {
  this.unsubscription$.next();
  this.unsubscription$.unsubscribe();
}

}
