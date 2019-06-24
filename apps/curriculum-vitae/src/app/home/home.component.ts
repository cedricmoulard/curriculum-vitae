import { Component, OnInit } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { Router } from "@angular/router";
import {environment} from "../../environments/environment";

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
  avatarUrl: string;

  constructor(private readonly router: Router) {
    this.avatarUrl = environment.api.avatar;
  }

  goToExperiences() {
    this.router.navigate(["/experiences"]);
  }
}
