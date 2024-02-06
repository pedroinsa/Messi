import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamiliaComponent } from './components/familia/familia.component';

const routes: Routes = [
  { path: "", component: FamiliaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamiliaRoutingModule { }
