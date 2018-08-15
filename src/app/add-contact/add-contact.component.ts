import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../../services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(public contactservice:ContactsService) { }

  ngOnInit() {
  }

  onSaveContact(dataForm){
    this.contactservice.saveContact(dataForm)
      .subscribe(
        data => {console.log(data);},
        err => {console.log(JSON.parse(err._body).message);}
      );
  }
}
