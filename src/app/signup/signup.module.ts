
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
const routes: Routes = [
    { path: 'signup', component: SignupComponent },
  ]
@NgModule({
    imports: [RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule
       ],
    exports: [
        CommonModule,
        SignupComponent,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
      ],
    providers:[SignupService],
    declarations: [SignupComponent]
  })
  export class SignUpModule { }
  