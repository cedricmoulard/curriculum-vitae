import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgxMdModule } from "ngx-md";
import { Title } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserAnimationsModule, AppRoutingModule, NgxMdModule.forRoot(), ScullyLibModule],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
