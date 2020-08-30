import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((mod) => mod.HomeModule),
    data: {title: 'Cédric Moulard | VP of Software Engineering'}
  },
  {
    path: "experiences",
    loadChildren: () =>
      import("./experiences/experiences.module").then(
        (mod) => mod.ExperiencesModule
      ),
    data: {title: 'Cédric Moulard | Experiences'}
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
