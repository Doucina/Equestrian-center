import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Admin } from '../admin';


@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {  
  admin = new Admin();
  msg = '';
  ngForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
    this.ngForm = this._formBuilder.group({
      emailId : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required]
    });
  }

  loginAdmin() {

    this._service.loginAdminFromRemote(
      {
        adminId:-1,
        adminEmailId: this.ngForm.get('emailId').value,
        adminName: "",
        adminPassword: this.ngForm.get('password').value,
      } as Admin ).subscribe(
      
      data => {
        console.log("Response received");
        this._router.navigate(['/admin-page'])
      },
      error => {
        console.log("Exception occured");
        this.msg = "Bad credentials, please enter valid emailId and password";
      }, 
    )
  }

  gotoregistration(){
    this._router.navigate(['/registrationadmin'])
  }

}
