import { Component, OnInit } from '@angular/core';
import {MuseumService} from '../services/openmuseum.service'

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {
  museumTitle:string="Title from detail"

  constructor(private museumService: MuseumService) { }

  ngOnInit() {
  }

}
