import { Component, OnInit } from "@angular/core";
import { Experience } from "@cv/experience-interface";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: "cv-experiences",
  templateUrl: "./experiences.component.html",
  styleUrls: ["./experiences.component.scss"]
})
export class ExperiencesComponent implements OnInit {
  title = "Cédric Moulard";
  experiences$: Observable<Experience[]>;

  constructor(private readonly http:HttpClient) {
    this.experiences$ = http.get<Experience[]>('/assets/experiences.json');
  }

  ngOnInit() {}
}
