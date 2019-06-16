import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExperienceComponent } from "./experience-ui.component";
import { HttpClientModule } from "@angular/common/http";
import { NgxMdModule } from "ngx-md";

@NgModule({
  imports: [CommonModule, HttpClientModule, NgxMdModule],
  declarations: [ExperienceComponent],
  exports: [ExperienceComponent]
})
export class ExperienceUiModule {}
