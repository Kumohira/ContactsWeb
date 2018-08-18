import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactsService} from '../../services/contacts.service';
import {Contact} from '../../model/model.contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  idContact:number;
  contact:Contact = new Contact();

  constructor(public router:Router, public activatedRoute:ActivatedRoute, public contactservice:ContactsService) {
    this.idContact = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {

    this.contact = this.contactservice.currentContact;

    // this.contactservice.getContact(this.idContact)
    //   .subscribe(
    //     data => {this.contact = data;},
    //     err => {console.log(JSON.parse(err._body).message);}
    //   );
  }

  onEditContact(dataForm){
    this.contactservice.editContact(dataForm)
      .subscribe(
        data => {},
        err => {console.log(JSON.parse(err._body).message);}
      );
    this.router.navigate(['contacts']);
  }
}
