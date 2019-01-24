import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IceCreamEditorComponent } from './ice-cream-editor/ice-cream-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    IceCreamEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
