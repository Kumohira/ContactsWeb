import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import {ContactsService} from '../services/contacts.service';
import { NewContactComponent } from './new-contact/new-contact.component';
import {FormsModule} from '@angular/forms';
import { AddContactComponent } from './add-contact/add-contact.component';

const appRoutes:Routes=[
  {path:'contacts',component:ContactsComponent},
  {path:'about',component:AboutComponent},
  {path:'new-contact',component:NewContactComponent},
  {path:'add-contact',component:AddContactComponent},
  {path:'',redirectTo:'/about',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
