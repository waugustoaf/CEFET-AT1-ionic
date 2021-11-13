import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumeroSecretoPageRoutingModule } from './numero-secreto-routing.module';

import { NumeroSecretoPage } from './numero-secreto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumeroSecretoPageRoutingModule
  ],
  declarations: [NumeroSecretoPage]
})
export class NumeroSecretoPageModule {}
