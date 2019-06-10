import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExperienceComponent } from "./experience-ui.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ExperienceComponent],
  exports: [ExperienceComponent]
})
export class ExperienceUiModule {}
