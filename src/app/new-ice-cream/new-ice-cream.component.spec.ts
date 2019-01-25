import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIceCreamComponent } from './new-ice-cream.component';

describe('NewIceCreamComponent', () => {
  let component: NewIceCreamComponent;
  let fixture: ComponentFixture<NewIceCreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIceCreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIceCreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
