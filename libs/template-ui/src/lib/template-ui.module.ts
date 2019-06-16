import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TemplateUiComponent } from "./template-ui.component";

@NgModule({
  imports: [CommonModule],
  declarations: [TemplateUiComponent],
  exports: [TemplateUiComponent]
})
export class TemplateUiModule {}
