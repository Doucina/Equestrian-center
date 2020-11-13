import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Superadmin } from '../superadmin';

@Component({
  selector: 'app-registrationsuperadmin',
  templateUrl: './registrationsuperadmin.component.html',
  styleUrls: ['./registrationsuperadmin.component.css']
})
export class RegistrationsuperadminComponent implements OnInit {
  superadmin = new Superadmin();
  msg = '';

constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  
registerSuperadmin() {
  this._service.registerSuperadminFromRemote(this.superadmin).subscribe(
    data => {
      console.log("Response received");
      this._router.navigate(['/loginsuperadmin'])
    },

    error => {
      console.log("Exception occured");
      this.msg= error.error;
    }
  )
}

gotologin(){
  this._router.navigate(['/loginsuperadmin'])
}  
}
