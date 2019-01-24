import { Component } from '@angular/core';
import { IceCreamTub } from './models/ice-cream-tub.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  iceCreamTubs: IceCreamTub[] = [
    new IceCreamTub('Vanilla', 3.50, ['Vanilla'], 'Umpqua'),
    new IceCreamTub('Chocolate', 3.50, ['Chocolate'], 'Tillamook'),
    new IceCreamTub('Strawberry', 3.50, ['Strawberry'], 'Tillamook'),
    new IceCreamTub('Neopolitan', 3.50, ['Chocolate','Vanilla','Strawberry'], 'Tillamook'),
  ];

}
