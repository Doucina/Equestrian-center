import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsuperadminComponent } from './loginsuperadmin.component';

describe('LoginsuperadminComponent', () => {
  let component: LoginsuperadminComponent;
  let fixture: ComponentFixture<LoginsuperadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginsuperadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
