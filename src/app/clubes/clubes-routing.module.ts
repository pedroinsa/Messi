import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubesComponent } from './components/clubes/clubes.component';

const routes: Routes = [
  { path: "", component: ClubesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubesRoutingModule { }
