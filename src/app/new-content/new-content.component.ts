import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-content',
  templateUrl: './new-content.component.html',
  styleUrls: ['./new-content.component.css']
})
export class NewContentComponent {

  @Input() iceCreamTub: IceCreamTub;
  constructor() { }

  ngOnInit() {
  }

}
