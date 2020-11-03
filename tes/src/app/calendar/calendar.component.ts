import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})


export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    eventClick: this.handleEventClick.bind(this), // bind is important!
    events: [
      { title: 'Cours Tornado', date: '2020-11-09' },
      { title: 'Cours Eclair', date: '2020-11-05' },
      { title: 'Cours Orphée', date: '2020-11-19' },
      { title: 'Cours Chataigne', date: '2020-11-24' }
    ]
  };

  handleEventClick(arg) {


      (async () => {
        const { value: heure } = await Swal.fire({
          title: 'Cours équitation',
          input: 'select',
          inputOptions: {
            'matin': {
              '9h': '9h',
              '10h30': '10h30',
            },
            'après-midi': {
              '15h15': '15h15',
            },
          },
          inputPlaceholder: 'Choisir un créneau',
          showCancelButton: true,
          inputValidator: (value) => {
            if (!value) {
              return 'Vous devez choisir un créneau !'
            }
            return new Promise((resolve) => {
              if (value === 'matin') {
                resolve()
              } else if (value === '9h'){
                resolve()
              } else {
                resolve()
              }
            })
          }
        })

        if (heure) {
          Swal.fire({
            text: `Session prévue à ${heure}`,
            // icon: 'success',
            title: arg.event._def.title + ' programmé !',
      
            imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.veiYnSAWM3-09TjQZ9maVQHaE7&pid=Api&P=0&w=281&h=188',
            imageWidth: 500,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
        }

      })()

  }

}
