import { Component, OnInit, Input, } from '@angular/core';
import  noutati  from '../../../assets/Data-json/noutati.json';

@Component({
  selector: 'app-noutati',
  templateUrl: './noutati.component.html',
  styleUrls: ['./noutati.component.scss']
})

export class NoutatiComponent implements OnInit {
  @Input() public Noutati: {id: number, title: string, date: string, textPreview: string, text: string, imgURL: string[], videoURL: string[], displayNews: boolean}[] = noutati.slice().reverse();

  inchide = '<span class="material-icons">close</span>'


  toggleContent(index: number) {

    this.Noutati[index].displayNews = !this.Noutati[index].displayNews;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

