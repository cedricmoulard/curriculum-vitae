import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TemplateUiModule } from "@cv/template-ui";
import { ExperienceUiModule } from "@cv/experience-ui";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TemplateUiModule, ExperienceUiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
