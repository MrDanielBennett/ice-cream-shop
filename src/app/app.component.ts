import { Component } from '@angular/core';
import { IceCreamTub } from './models/ice-cream-tub.model';
import { Content } from './models/content.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dannniel & Michhhael: Ice Cream Bar & Fry';
  employeeAccess: boolean = false;

  iceCreamTubs: IceCreamTub[] = [
    new IceCreamTub('Vanilla', 3.5, [new Content('Vanilla')], 'Umpqua'),
    new IceCreamTub('Chocolate', 3.5, [new Content('Chocolate')], 'Tillamook'),
    new IceCreamTub('Strawberry', 3.5, [new Content('Strawberry')], 'Beyers'),
    new IceCreamTub('Neopolitan', 6, [new Content('Vanilla'),new Content('Chocolate'),new Content('Strawberry')], 'Häagen-Dazs')
    new IceCreamTub('Spiked Vanilla', 3.5, [new Content('Vanilla'), new Content('Vodka', 74.8)], 'Umpqua'),
  ];

  grantAccess() {
    this.employeeAccess = true;
    console.log('employee access granted: ' + this.employeeAccess);
    // this.employeeAccess.emit();
  }

  finishEditing() {
    this.employeeAccess = false;
  }

}
