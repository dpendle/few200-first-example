import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoListItem } from './models';
import { TodoDataService } from './todo-data.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  items$: Observable<TodoListItem[]>;
  // items: TodoListItem[];
  // subscription: Subscription;
  constructor(private service: TodoDataService) { }

  ngOnInit() {
    this.items$ = this.service.getTodoList();
    // this.subscription = this.items$.subscribe(tdl => {
    //   console.log('got a new todoList!', tdl);
    //   this.items = tdl;
    // });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
  markComplete(item: TodoListItem) {
    // item.completed = true;
    // TODO: Call the service to do this
  }

  add(what: string) {
    // this.items.unshift({ description: what, completed: false });
    // TODO: Call the service to do this
    this.service.add(what);
  }

  clearCompleted() {
    // this.items = this.items.filter(item => item.completed === false);
    // TODO: Call the service to do this
  }
}
