import { FuzziesComponent } from './fuzzies/fuzzies.component';
import { NbThemeModule, NbCardModule, NbListModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { NebuRedSoulComponent } from './nebu-red-soul.component';
import { CommonModule } from '@angular/common';

const COMPS = [
  NebuRedSoulComponent,
  FuzziesComponent,
];

@NgModule({
  declarations: [
    ...COMPS
  ],
  imports: [
    CommonModule,
    NbThemeModule,
    NbCardModule,
    NbListModule,
  ],
  exports: [
    ...COMPS
  ]
})
export class NebuRedSoulModule { }
