import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactService } from './contacts/contact.service';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HomepageBannerComponent } from './homepage/homepage-banner/homepage-banner.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserService } from './users/user.service';

const appRoutes: Routes = [
  { path: 'dashboard',    component: DashboardComponent },
  { path: '', component: HomepageBannerComponent },
  {
    path: 'contacts',
    component: ContactListComponent,
    data: { title: 'Contact List' }
  },
  {
    path: 'users',
    component: UserListComponent,
    data: { title: 'User List' }
  }

];

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    ContactListComponent,
    DashboardComponent,
    HomepageBannerComponent,
    UserDetailsComponent,
    UserListComponent
  ],
  imports: [
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ContactService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
