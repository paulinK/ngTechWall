import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterSimulateComponent } from './router-simulate.component';

describe('RouterSimulateComponent', () => {
  let component: RouterSimulateComponent;
  let fixture: ComponentFixture<RouterSimulateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterSimulateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterSimulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
