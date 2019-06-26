import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableBookListComponent } from './available-book-list.component';

describe('AvailableBookListComponent', () => {
  let component: AvailableBookListComponent;
  let fixture: ComponentFixture<AvailableBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
