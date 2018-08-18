import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../../services/contacts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(public router:Router, public contactservice:ContactsService) { }

  ngOnInit() {
  }

  onSaveContact(dataForm){
    this.contactservice.saveContact(dataForm)
      .subscribe(
        data => {},
        err => {console.log(JSON.parse(err._body).message);}
      );
    //setTimeout(this.onSaveContact, 3000 );
    // apres avoir ajouté un contact, le contact ne s'affiche pas dans le component Contacts
    // "'"router.navigate" s'execute avant de "contactservice.saveContact"
    this.router.navigate(['contacts']);
  }
}
