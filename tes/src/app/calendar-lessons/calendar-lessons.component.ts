import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from '../event-utils';

@Component({
  selector: 'app-calendar-lessons',
  templateUrl: './calendar-lessons.component.html',
  styleUrls: ['./calendar-lessons.component.css']
})

export class CalendarLessonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listMonth'

    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS,
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
  };
  currentEvents: EventApi[] = [];

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleEventClick(clickInfo: EventClickArg) {

    Swal.fire({
      title: "S'inscrire à ce cours ?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Oui`,
    }).then((result) => {


      if (result.isConfirmed) {
        Swal.fire(
          'Super!',
          'vous êtes bien inscrit à ' + clickInfo.event.title,
          'success'
        )
      }
    })
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

}
