import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IceCreamEditorComponent } from './ice-cream-editor/ice-cream-editor.component';
import { NewIceCreamComponent } from './new-ice-cream/new-ice-cream.component';
import { NewContentComponent } from './new-content/new-content.component';


@NgModule({
  declarations: [
    AppComponent,
    IceCreamEditorComponent,
    NewIceCreamComponent,
    NewContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
