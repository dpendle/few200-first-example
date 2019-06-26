import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCollectionComponent } from './book-collection.component';
import { EnterBookInfoComponent } from './components/enter-book-info/enter-book-info.component';
import { AvailableBookListComponent } from './components/available-book-list/available-book-list.component';
import { OnloanBookListComponent } from './components/onloan-book-list/onloan-book-list.component';
import { StoreModule } from '@ngrx/store';
import { FEATURE, reducers } from './reducers';

@NgModule({
  declarations: [BookCollectionComponent, EnterBookInfoComponent, AvailableBookListComponent, OnloanBookListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE, reducers)
  ]
})
export class BookCollectionModule { }
