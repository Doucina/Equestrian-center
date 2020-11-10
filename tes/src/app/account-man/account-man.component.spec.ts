import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountManComponent } from './account-man.component';

describe('AccountManComponent', () => {
  let component: AccountManComponent;
  let fixture: ComponentFixture<AccountManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
