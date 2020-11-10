import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-account-man',
  templateUrl: './account-man.component.html',
  styleUrls: ['./account-man.component.css']
})
export class AccountManComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder, private _service: RegistrationService, private _router: Router) { }
  ngForm: FormGroup;
  public loginInvalid: boolean;

  ngOnInit(): void {
    this.ngForm = this._formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  
}
