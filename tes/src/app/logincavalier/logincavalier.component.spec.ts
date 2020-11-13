import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincavalierComponent } from './logincavalier.component';

describe('LogincavalierComponent', () => {
  let component: LogincavalierComponent;
  let fixture: ComponentFixture<LogincavalierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogincavalierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogincavalierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
