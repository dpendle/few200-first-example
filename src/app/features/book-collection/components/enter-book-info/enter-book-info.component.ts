import { Component, OnInit } from '@angular/core';
import { AddedBookToList } from '../../actions/book-collection.actions';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';

@Component({
  selector: 'app-enter-book-info',
  templateUrl: './enter-book-info.component.html',
  styleUrls: ['./enter-book-info.component.css']
})
export class EnterBookInfoComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  addBook(title: HTMLInputElement, author: HTMLInputElement, type: HTMLSelectElement) {
    this.store.dispatch(new AddedBookToList(title.value, author.value, type.value));
    title.value = '';
    author.value = '';
    type.value = 'hardcover';
    title.focus();
  }

}
