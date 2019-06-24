import { Component, OnInit } from "@angular/core";
import { Experience } from "@cv/experience-interface";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: "cv-experiences",
  templateUrl: "./experiences.component.html",
  styleUrls: ["./experiences.component.scss"]
})
export class ExperiencesComponent implements OnInit {
  title = "Cédric Moulard";
  experiences$: Observable<Experience[]>;
  avatarUrl: string;

  constructor(private readonly http:HttpClient) {
    this.experiences$ = http.get<Experience[]>(environment.api.experiences);
    this.avatarUrl = environment.api.avatar;
  }

  ngOnInit() {}
}
