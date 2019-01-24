import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IceCreamTub } from '../models/ice-cream-tub.model';

@Component({
  selector: 'app-ice-cream-editor',
  templateUrl: './ice-cream-editor.component.html',
  styleUrls: ['./ice-cream-editor.component.css']
})
export class IceCreamEditorComponent {
  @Input() childIceCreamTubs: IceCreamTub[];
  @Output() clickDone = new EventEmitter();

  constructor() { }

  finishEditing() {
    this.clickDone.emit();
  }

}
