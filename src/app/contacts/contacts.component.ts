import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ContactsService} from '../../services/contacts.service';
import {Router} from '@angular/router';
import {Contact} from '../../model/model.contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit{

  contact = {
    name:"med",
    email:"med@gmail.com"
  };

  public pageContacts: any;

  constructor(public http:HttpClient, public contactservice:ContactsService, public router:Router) {

  }

  ngOnInit() {
     this.contactservice.getContacts()
       .subscribe(
        data => {this.pageContacts = data;},
        err => {console.log(err);}
      );
  }

  onEditContact(user:Contact){
    this.contactservice.currentContact = this.pageContacts[this.pageContacts.indexOf(user)];
    this.router.navigate(['edit-contact',user.id])
  }

  onDeleteContact(user:Contact){
    this.contactservice.deleteContact(user.id)
      .subscribe(
        data => {
          this.pageContacts.splice(this.pageContacts.indexOf(user));
        },
        err => {console.log(JSON.parse(err._body).message);}
      );
  }
}
