import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { EmployersComponent } from './components/employers/employers.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path:"", component: HomepageComponent
  },
  {
    path:"aboutus", component : AboutusComponent
  },
  {
    path:"clients", component : ClientsComponent
  },
  {
    path:"contactus", component: ContactusComponent
  },
  {
    path:"employers", component: EmployersComponent
  },
  {
    path:"jobs", component:JobsComponent
  },
  {
    path:"profile", component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

