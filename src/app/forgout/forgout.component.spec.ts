import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgoutComponent } from './forgout.component';

describe('ForgoutComponent', () => {
  let component: ForgoutComponent;
  let fixture: ComponentFixture<ForgoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
