import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})


export class ContactSendService {

  ServerUrl = 'http://localhost:8080/testapp/getdetails';


  constructor(private http: HttpClient) { }

  contactForm(formdata: Contact) {
    return this.http.post<Contact>(this.ServerUrl, formdata).subscribe(
      res => {
        formdata = res;
        console.log(formdata);
        alert('Email Sent successfully');
        formdata.name = '';
        formdata.email = '';
        formdata.text = '';
      },
      err => {
        console.log(err);
      }
    );
  }
}



