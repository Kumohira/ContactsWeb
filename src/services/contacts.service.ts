import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../model/model.contact';

@Injectable()
export class ContactsService{

  currentContact:any;

  constructor(public http:HttpClient) {

  }

  getContacts(){
    return this.http.get("http://localhost:8088/users?type=admin&access_token=a9235083-fbd8-4908-a278-049377f9f491");
  }
  getContact(id:number){
    return this.http.get("http://localhost:8088/users/"+id+"?access_token=a9235083-fbd8-4908-a278-049377f9f491");
  }
  saveContact(contact:Contact){
    return this.http.post("http://localhost:8088/users/admin?access_token=a9235083-fbd8-4908-a278-049377f9f491", contact);
  }
  editContact(contact:Contact){
    return this.http.put("http://localhost:8088/users/admin/"+contact.id+"?access_token=a9235083-fbd8-4908-a278-049377f9f491", contact);
  }
  deleteContact(id:number){
    return this.http.delete("http://localhost:8088/users/"+id+"?access_token=a9235083-fbd8-4908-a278-049377f9f491");
  }
}
