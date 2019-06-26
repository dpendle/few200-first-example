import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnloanBookListComponent } from './onloan-book-list.component';

describe('OnloanBookListComponent', () => {
  let component: OnloanBookListComponent;
  let fixture: ComponentFixture<OnloanBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnloanBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnloanBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
