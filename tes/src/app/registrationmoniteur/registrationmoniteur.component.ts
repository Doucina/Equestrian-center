import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Moniteur } from '../moniteur';

@Component({
  selector: 'app-registrationmoniteur',
  templateUrl: './registrationmoniteur.component.html',
  styleUrls: ['./registrationmoniteur.component.css']
})
export class RegistrationmoniteurComponent implements OnInit {
  moniteur = new Moniteur();
  msg = '';

  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  registerMoniteur() {
    this._service.registerMoniteurFromRemote(this.moniteur).subscribe(
      data => {
        console.log("Response received");
        this._router.navigate(['/loginmoniteur'])
      },
  
      error => {
        console.log("Exception occured");
        this.msg= error.error;
      }
    )
  }
  
  gotologin(){
    this._router.navigate(['/loginmoniteur'])
  }  
}
