import { Component } from '@angular/core';
import { IceCreamTub } from './models/ice-cream-tub.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dannniel & Michhhael: Ice Cream Bar & Fry';

  iceCreamTubs: IceCreamTub[] = [
    new IceCreamTub('Vanilla', 3.5, ['Vanilla'], 'Umpqua'),
    new IceCreamTub('Chocolate', 3.5, ['Chocolate'], 'Tillamook'),
    new IceCreamTub('Strawberry', 3.5, ['Strawberry'], 'Beyers'),
    new IceCreamTub('Neopolitan', 6, ['Chocolate','Vanilla','Strawberry'], 'Häagen-Dazs')
  ];

}
