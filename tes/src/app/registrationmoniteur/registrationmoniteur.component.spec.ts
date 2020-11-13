import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationmoniteurComponent } from './registrationmoniteur.component';

describe('RegistrationmoniteurComponent', () => {
  let component: RegistrationmoniteurComponent;
  let fixture: ComponentFixture<RegistrationmoniteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationmoniteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationmoniteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
