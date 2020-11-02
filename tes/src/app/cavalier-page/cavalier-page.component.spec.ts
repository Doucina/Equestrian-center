import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CavalierPageComponent } from './cavalier-page.component';

describe('CavalierPageComponent', () => {
  let component: CavalierPageComponent;
  let fixture: ComponentFixture<CavalierPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CavalierPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CavalierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
