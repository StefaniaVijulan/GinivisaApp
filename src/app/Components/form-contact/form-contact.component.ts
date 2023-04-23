import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../../contact';
import { ContactSendService } from '../../contact-send.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.scss']
})
export class FormContactComponent implements OnInit {

  contact = new Contact;

  // name: string = '';
  // email: string = '';
  // text: string = '';

  private url = "http://localhost:8080/api"

  constructor(private http: HttpClient) { }

  name = '';
  email = '';
  text = '';

  ngOnInit(): void {}

  submitForm() {
    let data = {
      name: this.name,
      email: this.email,
      text: this.text
    }

    const message = `
      Nume: ${this.name}
      Email: ${this.email}
      Message: ${this.text}`

      if (!this.name || !this.email || !this.text) {
        alert("Vă rugăm să completați toate câmpurile")
      }
      else {
        alert(data)
      }


      return this.http.post<Contact>(this.url, data).subscribe(
        res => {
          data = res;
          console.log(data);
          alert('Email Sent successfully');
          data.name = '';
          data.email = '';
          data.text = '';
        },
        err => {
          console.log(err);
        }
      );


  }

}
