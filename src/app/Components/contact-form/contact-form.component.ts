import { ContactService } from './../../Service/contact.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import { Contact } from '../../contact';
import { User } from './user';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  postId: any;
  url = "http://localhost:8080/sendEmailFromForm"

  nameContact = "";
  emailContact = "";
  phoneContact = "";
  textContact = "";
  // subjectContact = "Mesaj Client";


  constructor(private router: Router, private contactService: ContactService) { }

  ngOnInit(): void {
  }

  onSubmit(data: any) {
    // console.log(data)
    data.subjectContact = "Mesaj Client"
    this.contactService.contactForm(data).subscribe((res)=>{
      console.log(res)
    })


  this.router.navigate(['/contact']);
  }
}
