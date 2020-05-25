import { Component, OnInit, Input } from '@angular/core';
import { MuseumService } from '../services/openmuseum.service'
import { Museum } from '../models/museum/museum';

@Component({
  selector: 'app-single-museum',
  templateUrl: './single-museum.component.html',
  styleUrls: ['./single-museum.component.css']
})

export class SingleMuseumComponent implements OnInit {

  @Input() museum: Museum;


  constructor(private museumService: MuseumService) { }

  ngOnInit() {
  }

}
