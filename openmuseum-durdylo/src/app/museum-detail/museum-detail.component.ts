import { Component, OnInit } from "@angular/core";
import { MuseumService } from "../services/openmuseum.service";
import { ActivatedRoute } from "@angular/router";
import { Museum } from '../models/museum/museum';
import { DataService } from "../services/data.service";

@Component({
  selector: "app-museum-detail",
  templateUrl: "./museum-detail.component.html",
  styleUrls: ["./museum-detail.component.css"],
})
export class MuseumDetailComponent implements OnInit {
  museum: Museum;
  constructor(
    private museumService: MuseumService,
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    const id: string = this.route.snapshot.params['_id'];
    this.dataService.fetchMuseumById(id).subscribe(
      (res) => {
        // console.log(res);
        this.museum = res;
      },
      (error) => {
        "Error Try Again";
      }
    );
  }
}
