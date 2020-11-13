import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from '../event-utils';
// import { formatDate } from '@fullcalendar/core'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})


export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek,timeGridDay,listWeek'

    },
    initialView: 'timeGridWeek',
    initialEvents: INITIAL_EVENTS,
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[] = [];

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a title for your event' + '   ' +
      '#Event is dragable and resizable');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }

  }

  handleEventClick(clickInfo: EventClickArg) {

    Swal.fire({
      title: 'What do you want to do ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Edit`,
      denyButtonText: `Delete`,
    }).then((result) => {


      if (result.isDenied) {
        if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
          clickInfo.event.remove();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      }

      else if (result.isConfirmed) {
        (async () => {

          const { value: text } = await Swal.fire({
            title: 'Edit Event',
            input: 'text',
            inputPlaceholder: 'Event name'
          })

          // A l'aide !!!!! Pour remplacer 2 résultats !!!!!!!
          // if (text =! clickInfo.event.title) {
          //   Swal.fire(`${text}`)
          // //  '${clickInfo.event.title}'.replaceWith(`${text}`);
          //   }

          if (text) {
            Swal.fire(
              'Edited!',
              '',
              'success')
          }
        })()
      }
    })
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }


}
