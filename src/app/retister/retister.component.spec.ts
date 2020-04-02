import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetisterComponent } from './retister.component';

describe('RetisterComponent', () => {
  let component: RetisterComponent;
  let fixture: ComponentFixture<RetisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
