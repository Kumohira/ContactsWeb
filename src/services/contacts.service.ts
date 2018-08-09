import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../model/model.contact';

@Injectable()
export class ContactsService{

  constructor(public http:HttpClient) {
  }

  getContacts(){
    return this.http.get("http://localhost:8088/getadmins?access_token=2732e500-5efe-42a4-a5e4-009e54d8d0e9");
  }
  saveContact(contact:Contact){
    return this.http.post("http://localhost:8088/newadmin?access_token=2732e500-5efe-42a4-a5e4-009e54d8d0e9", contact);
  }
}
