import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VistasPage } from './vistas';

@NgModule({
  declarations: [
    VistasPage,
  ],
  imports: [
    IonicPageModule.forChild(VistasPage),
  ],
})
export class VistasPageModule {}
