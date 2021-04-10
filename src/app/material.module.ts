import { NgModule } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

const materialModules = [
  MatSliderModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule {

}