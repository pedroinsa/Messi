import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './components/prueba/prueba.component';
;
import { FamiliaComponent } from './familia/components/familia/familia.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: InicioComponent },
  { path: "familia", loadChildren: () => import("./familia/familia.module").then(m => m.FamiliaModule) },
  { path: "clubes", loadChildren: () => import("./clubes/clubes.module").then(m => m.ClubesModule) },
  { path: "argentina", loadChildren: () => import("./argentina/argentina.module").then(m => m.ArgentinaModule) },
  { path: "contacto", loadChildren: () => import("./contacto/contacto.module").then(m => m.ContactoModule) }

];

// const routes: Routes = [
//   { path: "", redirectTo: "home", pathMatch: "full" },
//   { path: "home", component: InicioComponent },
//   { path: "familia", loadChildren: () => import("./familia/familia.module").then(m => m.FamiliaModule) },
//   { path: "clubes", loadChildren: () => import("./clubes/clubes.module").then(m => m.ClubesModule) },
//   { path: "argentina", loadChildren: () => import("./argentina/argentina.module").then(m => m.ArgentinaModule) },
//   { path: "contacto", loadChildren: () => import("./contacto/contacto.module").then(m => m.ContactoModule) }

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
