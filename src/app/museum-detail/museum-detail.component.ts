import { Component, OnInit } from '@angular/core';
import { MuseumService } from '../services/openmuseum.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {
  museumTitle: string;
  reference: string;
  constructor(private museumService: MuseumService, private route: ActivatedRoute) { }

  ngOnInit() {
    const reference = this.route.snapshot.params['reference'];
    this.museumTitle = this.museumService.getMuseumById(reference).name;
  }

}
