import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookItem } from './models/book-model';
import { Store } from '@ngrx/store';
import { selectBooks, selectOnLoan, State } from './reducers';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.css']
})
export class BookCollectionComponent implements OnInit {
  books$: Observable<BookItem[]>;
  onLoanBooks$: Observable<BookItem[]>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.books$ = this.store.select(selectBooks);
    this.onLoanBooks$ = this.store.select(selectOnLoan);
  }

}
