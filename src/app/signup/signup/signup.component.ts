
import { SignupService } from './../signup.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  authenticated;
  zipForm: FormGroup;
  noOfUsers: number;
  userObject = {}
  constructor(private fb: FormBuilder,
    private signupService: SignupService,
    private router: Router) {
  }

  ngOnInit() {
    this.authenticated = this.signupService.authenticated;
    this.signupService.getNoOfUsers().subscribe(data => {
      this.noOfUsers = data.noOfUsers;
    });
    if (this.authenticated) {
      let val = this;
      setTimeout(function () {
        val.router.navigate(['/weather/info'])
      }, 2000)
    }

    this.zipForm = this.fb.group({
      'zipcode': ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
      'tc': [false, Validators.required]
    }, { validator: checkCheckbox })
    function checkCheckbox(c: AbstractControl) {
      if (c.get('tc').value == false) {
        return false;
      } else return true;
    }

  }

  signUp() {
    this.userObject['noOfUsers'] = this.noOfUsers + 1;
    this.signupService.updateNoOfUsers(this.userObject);
    this.signupService.authenticated = true;

    this.router.navigate(['/weather/info'])

  }
  isValidUSZip(sZip) {
    return /^\d{5}(-\d{4})?$/.test(sZip);
  }
}
