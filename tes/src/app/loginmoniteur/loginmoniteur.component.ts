import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { FormGroup, FormBuilder, Validator, Validators } from "@angular/forms";
import { Moniteur } from '../moniteur';


@Component({
  selector: 'app-loginmoniteur',
  templateUrl: './loginmoniteur.component.html',
  styleUrls: ['./loginmoniteur.component.css']
})
export class LoginmoniteurComponent implements OnInit {
  moniteur = new Moniteur();
  msg = '';
  ngForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
    this.ngForm = this._formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  loginMoniteur() {

    this._service.loginMoniteurFromRemote(
      {
        moniteurId: -1,
        moniteurEmailId: this.ngForm.get('emailId').value,
        moniteurName: "",
        moniteurPassword: this.ngForm.get('password').value,
      } as Moniteur).subscribe(

        data => {
          console.log("Response received");
          this._router.navigate(['/moniteur-page'])
        },
        error => {
          console.log("Exception occured");
          this.msg = "Bad credentials, please enter valid emailId and password";
        },
      )
  }
  gotoregistration() {
    this._router.navigate(['/registrationmoniteur'])
  }
}
