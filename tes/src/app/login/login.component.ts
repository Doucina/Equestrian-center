import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { FormControl, FormGroup, FormBuilder, Validator, Validators,ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';
  ngForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
    this.ngForm = this._formBuilder.group({
      emailId : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required]
    });
  }


  loginUser() {

    this._service.loginUserFromRemote(
      {
        id:-1,
        emailId: this.ngForm.get('emailId').value,
        userName: "",
        password: this.ngForm.get('password').value,
      } as User ).subscribe(

      // error => {
      //   console.log("Exception occured");
      //   this.msg = "Bad credentials, please enter valid emailId and password";
      // }, 
      
      data => {
        console.log("Response received");
        this._router.navigate(['/dashboard'])
      },

    )
  }

  gotoregistration(){
    this._router.navigate(['/registration'])
  }

}
