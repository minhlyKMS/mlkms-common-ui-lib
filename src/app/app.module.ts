import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MlkmsCommonUiModule } from 'mlkms-common-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    MlkmsCommonUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
