import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArgentinaComponent } from './components/argentina/argentina.component';

const routes: Routes = [
  { path: "", component: ArgentinaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArgentinaRoutingModule { }
