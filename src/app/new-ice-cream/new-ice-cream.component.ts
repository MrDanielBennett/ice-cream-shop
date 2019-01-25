import { Component, Input, Output } from '@angular/core';
import { IceCreamTub } from '../models/ice-cream-tub.model';

@Component({
  selector: 'app-new-ice-cream',
  templateUrl: './new-ice-cream.component.html',
  styleUrls: ['./new-ice-cream.component.css']
})
export class NewIceCreamComponent{

  iceCreamTub: IceCreamTub = new IceCreamTub('name', 3.5, [], 'brand');
  constructor() { }

  ngOnInit() {
  }

}
