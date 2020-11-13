import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoniteurPageComponent } from './moniteur-page.component';

describe('MoniteurPageComponent', () => {
  let component: MoniteurPageComponent;
  let fixture: ComponentFixture<MoniteurPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoniteurPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoniteurPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
