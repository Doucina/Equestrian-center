import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { HomeComponent } from './home/home.component';
import { LoginmoniteurComponent } from './loginmoniteur/loginmoniteur.component';
import { LogincavalierComponent } from './logincavalier/logincavalier.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { LoginsuperadminComponent } from './loginsuperadmin/loginsuperadmin.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'loginmoniteur', component: LoginmoniteurComponent },
  { path: 'logincavalier', component: LogincavalierComponent },
  { path: 'loginadmin', component: LoginadminComponent },
  { path: 'loginsuperadmin', component: LoginsuperadminComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'loginsuccess', component: LoginsuccessComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
