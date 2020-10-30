import { FlipitComponent } from './flipit/flipit.component';
import { NgModule } from '@angular/core';
import { NebuBlueSoulComponent } from './nebu-blue-soul.component';
import { NbCardModule, NbThemeModule } from '@nebular/theme';


@NgModule({
  declarations: [
    NebuBlueSoulComponent,
    FlipitComponent,
  ],
  imports: [
    NbThemeModule.forRoot(),
    NbCardModule,
  ],
  exports: [
    NebuBlueSoulComponent,
    FlipitComponent,
  ]
})
export class NebuBlueSoulModule { }
