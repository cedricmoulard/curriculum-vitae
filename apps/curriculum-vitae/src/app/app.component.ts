import { Component } from "@angular/core";
import { experiences } from "./data/experiences";
import { Experience } from "@cv/experience-interface";

@Component({
  selector: "cv-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Cédric Moulard";
  experiences: Experience[];

  constructor() {
    this.experiences = experiences;
  }
}
