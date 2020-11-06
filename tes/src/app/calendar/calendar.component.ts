import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
// import Swal from 'sweetalert2/dist/sweetalert2.js';
import { DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from '../event-utils';
import { formatDate } from '@fullcalendar/core'

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
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    
    },
    initialView: 'timeGridWeek',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
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
    const title = prompt('Please enter a title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
        // start_date: selectInfo.startStr  Test ....
      });
    }
    
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
    // } else {
    //   clickInfo.event.edit();
    // }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  
  // handleEventClick(arg) {
  //       if (heure) {
  //         Swal.fire({
  //           text: `Session prévue à ${heure}`,
  //           // icon: 'success',
  //           title: arg.event._def.title + ' programmé !',
      
  //           imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.veiYnSAWM3-09TjQZ9maVQHaE7&pid=Api&P=0&w=281&h=188',
  //           imageWidth: 500,
  //           imageHeight: 200,
  //           imageAlt: 'Custom image',
  //         })
  //       }
  //     })()
  // }

}
