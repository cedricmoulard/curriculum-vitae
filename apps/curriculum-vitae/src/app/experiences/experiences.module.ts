import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExperiencesComponent } from "./experiences.component";
import { TemplateUiModule } from "@cv/template-ui";
import { ExperienceUiModule } from "@cv/experience-ui";
import { ExperiencesRoutingModule } from "./experiences-routing.module";

@NgModule({
  declarations: [ExperiencesComponent],
  imports: [
    CommonModule,
    TemplateUiModule,
    ExperienceUiModule,
    ExperiencesRoutingModule
  ]
})
export class ExperiencesModule {}
