import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterBookInfoComponent } from './enter-book-info.component';

describe('EnterBookInfoComponent', () => {
  let component: EnterBookInfoComponent;
  let fixture: ComponentFixture<EnterBookInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterBookInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterBookInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
