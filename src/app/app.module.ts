import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppMusicRecordComponent } from './musicrecord/musicrecord.component';
import { BandComponent } from './band/band.component';
import { FestivalComponent } from './festival/festival.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMusicRecordComponent,
    BandComponent,
    FestivalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
