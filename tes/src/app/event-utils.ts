import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
const TO_STR = '2020-11-16';
const TO2_STR = '2020-11-27';

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: TODAY_STR
  },
  {
    id: createEventId(),
    title: 'Special event',
    start: TODAY_STR + 'T12:45:00'
  },
  {
    id: createEventId(),
    title: 'Tornado Class',
    start: TO_STR 
  },
  {
    id: createEventId(),
    title: 'Orphée Class',
    start: TO2_STR
  },
  {
    id: createEventId(),
    title: 'Pélican Class - Extra special options',
    // start: TO2_STR
    start: '2020-11-29',
    end: '2020-12-01'
  },

];

export function createEventId() {
  return String(eventGuid++);
}
