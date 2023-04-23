import { Contact } from './../contact';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  private publicHttpHeaders = {
    headers: new HttpHeaders({'content-type':'application/json'})
  };

  constructor(private _http: HttpClient) { }

  contactForm(contact: Contact) {
    console.log(contact)
   return this._http.post("http://localhost:8080/sendEmailFromForm", contact);
  }
}
