import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationsuperadminComponent } from './registrationsuperadmin.component';

describe('RegistrationsuperadminComponent', () => {
  let component: RegistrationsuperadminComponent;
  let fixture: ComponentFixture<RegistrationsuperadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationsuperadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationsuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
