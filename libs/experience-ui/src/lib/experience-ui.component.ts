import { Component, Input } from "@angular/core";
import { Experience } from "@cv/experience-interface";

@Component({
  selector: "cv-experience",
  template: `
    <div class="container">
      <div class="summary">
        <div class="date">{{ experience.from }} - {{ experience.to }}</div>
        <div>{{ experience.title }}</div>
        <div>{{ experience.client }}</div>
      </div>
      <div class="description">
        <div Markdown [path]="experience.detailLink"></div>
      </div>
    </div>
  `,
  styleUrls: ["./experience-ui.component.scss"]
})
export class ExperienceComponent {
  @Input() experience: Experience;
}
