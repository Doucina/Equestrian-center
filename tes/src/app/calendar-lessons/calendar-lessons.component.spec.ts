import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarLessonsComponent } from './calendar-lessons.component';

describe('CalendarLessonsComponent', () => {
  let component: CalendarLessonsComponent;
  let fixture: ComponentFixture<CalendarLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
