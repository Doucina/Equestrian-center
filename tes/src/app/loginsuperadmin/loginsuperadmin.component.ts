import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Superadmin } from '../superadmin';


@Component({
  selector: 'app-loginsuperadmin',
  templateUrl: './loginsuperadmin.component.html',
  styleUrls: ['./loginsuperadmin.component.css']
})
export class LoginsuperadminComponent implements OnInit {
  superadmin = new Superadmin();
  msg = '';
  ngForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
    this.ngForm = this._formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  loginSuperadmin() {

    this._service.loginSuperadminFromRemote(
      {
        superadminId: -1,
        superadminEmailId: this.ngForm.get('emailId').value,
        superadminName: "",
        superadminPassword: this.ngForm.get('password').value,
      } as Superadmin).subscribe(

        data => {
          console.log("Response received");
          this._router.navigate(['/super-admin-page'])
        },

        error => {
          console.log("Exception occured");
          this.msg = "Bad credentials, please enter valid emailId and password";
        },
      )
  }
  gotoregistration() {
    this._router.navigate(['/registrationsuperadmin'])
  }
}
