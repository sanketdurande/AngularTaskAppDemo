import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import{MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { EmployersComponent } from './components/employers/employers.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProfileComponent } from './components/profile/profile.component';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    HomepageComponent,
    AboutusComponent,
    ContactusComponent,
    JobsComponent,
    EmployersComponent,
    ClientsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
