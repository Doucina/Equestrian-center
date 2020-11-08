import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
const TO_STR = '2020-12-16';

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: TODAY_STR
  },
  {
    id: createEventId(),
    title: 'Special event',
    start: '2020-11-16' + 'T14:45:00'
  },
  {
    id: createEventId(),
    title: 'Tornado Class',
    start: '2020-11-20' + 'T09:45:00',
    end: '2020-11-20' + 'T11:30:00'  
  },
  {
    id: createEventId(),
    title: 'Orphée Class',
    start: '2020-11-26' + 'T12:00:00',
    end: '2020-11-26' + 'T14:45:00'
  },
  {
    id: createEventId(),
    title: 'Pélican Class - Extra special options',
    start: '2020-12-01' + 'T08:30:00',
    end: '2020-12-01' + 'T13:00:00'
  },
  {
    id: createEventId(),
    title: 'Donald Class',
    start: '2020-12-07' + 'T11:30:00',
    end: '2020-12-07' + 'T13:00:00',
  }
];

export function createEventId() {
  return String(eventGuid++);
}
