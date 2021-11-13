import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppFinanceiroPage } from './app-financeiro.page';

const routes: Routes = [
  {
    path: '',
    component: AppFinanceiroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppFinanceiroPageRoutingModule {}
