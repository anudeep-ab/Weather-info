import { SignUpModule } from './signup/signup.module';
import { WeatherModule } from './weather/weather.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authguard/auth.guard';
const routes: Routes = [
  {
    path:'',redirectTo:'/signup',pathMatch:'full'
  },
  {
    path: '', loadChildren: './signup/signup.module#SignUpModule'
  },
  {
    path: 'weather', loadChildren: './weather/weather.module#WeatherModule',canLoad:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),WeatherModule,SignUpModule],
  exports: [RouterModule, WeatherModule,SignUpModule]
})
export class AppRoutingModule { }
