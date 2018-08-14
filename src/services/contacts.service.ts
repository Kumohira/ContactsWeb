import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../model/model.contact';

@Injectable()
export class ContactsService{

  constructor(public http:HttpClient) {
  }

  getContacts(){
    return this.http.get("http://localhost:8088/users/admin?access_token=48d75a3d-7e77-4f97-a057-11d284aa5068");
  }
  saveContact(contact:Contact){
    return this.http.post("http://localhost:8088/users/admin?access_token=48d75a3d-7e77-4f97-a057-11d284aa5068", contact);
  }
}
