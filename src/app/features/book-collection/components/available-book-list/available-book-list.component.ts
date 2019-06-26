import { Component, OnInit, Input, } from '@angular/core';
import { BookItem } from '../../models/book-model';
import { Store } from '@ngrx/store';
import { State } from '../../reducers/on-loan.reducer';
import { LoanedBookOut } from '../../actions/book-collection.actions';

@Component({
  selector: 'app-available-book-list',
  templateUrl: './available-book-list.component.html',
  styleUrls: ['./available-book-list.component.css']
})
export class AvailableBookListComponent implements OnInit {
  @Input() bookList: BookItem[];
  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  checkOutBook(book: BookItem) {
    this.store.dispatch(new LoanedBookOut(book));
  }

}
