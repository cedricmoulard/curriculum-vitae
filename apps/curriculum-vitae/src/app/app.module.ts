import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TemplateUiModule } from "@cv/template-ui";
import { ExperienceUiModule } from "@cv/experience-ui";
import { NgxMdModule } from "ngx-md";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, AppRoutingModule, NgxMdModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
