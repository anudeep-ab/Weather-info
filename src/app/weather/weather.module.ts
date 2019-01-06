import { WeatherService } from './weather.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { WeatherComponent } from './weather.component';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthGuard } from '../authguard/auth.guard';
const routes: Routes = [
    { path: 'info', component: WeatherComponent ,canActivate:[AuthGuard]},
  ]
@NgModule({
    imports: [RouterModule.forChild(routes),CommonModule,NgxSpinnerModule],
    exports: [
        CommonModule,
        WeatherComponent,
        RouterModule,
        NgxSpinnerModule
      ],
    providers:[WeatherService],
    declarations: [WeatherComponent]
  })
  export class WeatherModule { }
  