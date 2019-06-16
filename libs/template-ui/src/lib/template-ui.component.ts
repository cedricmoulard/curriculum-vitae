import { Component, Input } from "@angular/core";

@Component({
  selector: "cv-template-ui",
  templateUrl: "./template-ui.component.html",
  styleUrls: ["./template-ui.component.scss"]
})
export class TemplateUiComponent {
  @Input() title: string;
}
