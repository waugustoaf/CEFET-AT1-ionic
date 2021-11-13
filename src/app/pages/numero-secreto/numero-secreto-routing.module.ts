import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumeroSecretoPage } from './numero-secreto.page';

const routes: Routes = [
  {
    path: '',
    component: NumeroSecretoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumeroSecretoPageRoutingModule {}
