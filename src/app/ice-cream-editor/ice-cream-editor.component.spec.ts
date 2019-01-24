import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreamEditorComponent } from './ice-cream-editor.component';

describe('IceCreamEditorComponent', () => {
  let component: IceCreamEditorComponent;
  let fixture: ComponentFixture<IceCreamEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IceCreamEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IceCreamEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
