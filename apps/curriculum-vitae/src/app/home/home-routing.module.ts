import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ExperiencesComponent } from "../experiences/experiences.component";

const routes: Routes = [
  { path: "", component: HomeComponent, data: { animation: "HomePage" } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
