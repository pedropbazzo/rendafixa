import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    PainelComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    PainelComponent
  ],
  providers: [

  ]
})
export class PainelModule { }
