import { Component, OnInit, Input } from '@angular/core';
import { BookItem } from '../../models/book-model';

@Component({
  selector: 'app-onloan-book-list',
  templateUrl: './onloan-book-list.component.html',
  styleUrls: ['./onloan-book-list.component.css']
})
export class OnloanBookListComponent implements OnInit {
  @Input() onLoanList: BookItem[];
  constructor() { }

  ngOnInit() {
  }

}
