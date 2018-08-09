import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contact = {
    name:"med",
    email:"med@gmail.com"
  };
  public pageContacts: any;

  constructor(public http:HttpClient, public contactservice:ContactsService) {

  }

  ngOnInit() {
    // si le comp immplement OnInit on doit redefinir ngOnInit
    // kumo    : b59584d7-70d1-438c-8131-11434cec86c1
    // client1 : 13771f09-9e04-4c5a-a608-ed96649a401f
     this.contactservice.getContacts()
       .subscribe(
        data => {this.pageContacts = data;},
        err => {console.log(err);}
      );
  }
}
