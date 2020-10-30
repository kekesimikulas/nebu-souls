import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbLayoutModule, NbThemeModule } from '@nebular/theme';
import { NbSidebarModule } from '@nebular/theme';
import { NbButtonModule } from '@nebular/theme';
import { NebuBlueSoulModule } from 'nebu-blue-soul';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,

    NebuBlueSoulModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
