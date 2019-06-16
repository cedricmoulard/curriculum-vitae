import { Component, OnInit } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { Router } from "@angular/router";

@Component({
  selector: "cv-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    trigger("titleAnimation", [
      state(
        "true",
        style({
          transform: "scale(1.2)",
          opacity: 1
        })
      ),
      transition(":enter", animate("1000ms ease-out"))
    ])
  ]
})
export class HomeComponent {
  title = "Cédric Moulard";
  subtitle = "ScrumMaster | Tech Lead Full Stack";

  constructor(private readonly router: Router) {}

  goToExperiences() {
    this.router.navigate(["/experiences"]);
  }
}
