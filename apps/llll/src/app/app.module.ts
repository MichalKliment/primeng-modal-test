import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormlyModule } from '@ngx-formly/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreFormlyModule } from './formly.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormlyModule,
    ReactiveFormsModule,
    CoreFormlyModule,
    FormlyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
