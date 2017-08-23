import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: 'dashboard',    component: DashboardComponent },
  { path: 'contact/:id',  component: ContactDetailsComponent },
  {
    path: 'contacts',
    component: ContactListComponent,
    data: { title: 'Contact List' }
  },

];

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    ContactListComponent,
    DashboardComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
