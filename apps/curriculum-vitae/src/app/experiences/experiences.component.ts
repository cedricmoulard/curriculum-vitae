import { Component, OnInit } from "@angular/core";
import { Experience } from "@cv/experience-interface";
import { experiences } from "../data/experiences";

@Component({
  selector: "cv-experiences",
  templateUrl: "./experiences.component.html",
  styleUrls: ["./experiences.component.css"]
})
export class ExperiencesComponent implements OnInit {
  title = "Cédric Moulard";
  experiences: Experience[];

  constructor() {
    this.experiences = experiences;
  }

  ngOnInit() {}
}
