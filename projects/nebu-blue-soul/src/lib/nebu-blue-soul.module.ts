import { NgModule } from '@angular/core';
import { NebuBlueSoulComponent } from './nebu-blue-soul.component';
import { NbThemeModule } from '@nebular/theme';


@NgModule({
  declarations: [NebuBlueSoulComponent],
  imports: [
    NbThemeModule.forRoot(),
  ],
  exports: [NebuBlueSoulComponent]
})
export class NebuBlueSoulModule { }
