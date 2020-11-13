import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { FormGroup, FormBuilder, Validator, Validators } from "@angular/forms";


@Component({
  selector: 'app-logincavalier',
  templateUrl: './logincavalier.component.html',
  styleUrls: ['./logincavalier.component.css']
})
export class LogincavalierComponent implements OnInit {
  user = new User();
  msg = '';
  ngForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
    this.ngForm = this._formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  loginUser() {

    this._service.loginUserFromRemote(
      {
        id: -1,
        emailId: this.ngForm.get('emailId').value,
        userName: "",
        password: this.ngForm.get('password').value,
      } as User).subscribe(

        data => {
          console.log("Response received");
          this._router.navigate(['/cavalier-page'])
        },
        error => {
          console.log("Exception occured");
          this.msg = "Bad credentials, please enter valid emailId and password";
        },
      )
  }
  gotoregistration() {
    this._router.navigate(['/registration'])
  }
}
