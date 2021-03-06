import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/model.contact';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contact:Contact = new Contact();

  constructor(public contactservice:ContactsService) {
  }

  ngOnInit() {
  }

  newContact() {
    this.contactservice.saveContact(this.contact)
      .subscribe(
        data => {},
        err => {console.log(JSON.parse(err._body).message);}
      );
  }
}
