import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';

import { LoginmoniteurComponent } from './loginmoniteur/loginmoniteur.component';
import { LogincavalierComponent } from './logincavalier/logincavalier.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { LoginsuperadminComponent } from './loginsuperadmin/loginsuperadmin.component';

import { MoniteurPageComponent } from './moniteur-page/moniteur-page.component';
import { SuperAdminPageComponent } from './super-admin-page/super-admin-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CavalierPageComponent } from './cavalier-page/cavalier-page.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    MessagesComponent,
    RegistrationComponent,
    LoginComponent,
    LoginsuccessComponent,
    RegistrationComponent,
    HomeComponent,
    LoginmoniteurComponent,
    LogincavalierComponent,
    LoginadminComponent,
    LoginsuperadminComponent,
    MoniteurPageComponent,
    SuperAdminPageComponent,
    AdminPageComponent,
    CavalierPageComponent,
    CalendarComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
