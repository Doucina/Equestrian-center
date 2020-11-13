import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-registrationadmin',
  templateUrl: './registrationadmin.component.html',
  styleUrls: ['./registrationadmin.component.css']
})
export class RegistrationadminComponent implements OnInit {
  admin = new Admin();
  msg = '';

constructor(private _service: RegistrationService, private _router: Router) { }

ngOnInit(): void {
}

registerAdmin() {
  this._service.registerAdminFromRemote(this.admin).subscribe(
    data => {
      console.log("Response received");
      this._router.navigate(['/loginadmin'])
    },

    error => {
      console.log("Exception occured");
      this.msg= error.error;
    }
  )
}

gotologin(){
  this._router.navigate(['/loginadmin'])
}  
}
