import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppFinanceiroPageRoutingModule } from './app-financeiro-routing.module';

import { AppFinanceiroPage } from './app-financeiro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppFinanceiroPageRoutingModule
  ],
  declarations: [AppFinanceiroPage]
})
export class AppFinanceiroPageModule {}
