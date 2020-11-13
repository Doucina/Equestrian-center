import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmoniteurComponent } from './loginmoniteur.component';

describe('LoginmoniteurComponent', () => {
  let component: LoginmoniteurComponent;
  let fixture: ComponentFixture<LoginmoniteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginmoniteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginmoniteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
