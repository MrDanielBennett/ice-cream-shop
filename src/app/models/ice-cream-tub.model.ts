import { Content } from './content.model';
class IceCreamTub {
  scoops: number = 55;
  alchoholPercent: string;
  constructor(public name: string, public price: number, public contents: Content[], public brand: string){
    this.calculateAlchoholPercent();
  }

  displayPrice() {
    return ((Math.ceil(this.price*100))/100).toFixed(2);
  }

  calculateAlchoholPercent() {
    let ozTotal = 3*128;
    let alchoholOz = 0;
    this.contents.forEach(function(content){alchoholOz+=content.alchoholLiquidOz;});
    this.alchoholPercent = (alchoholOz/ozTotal).toFixed(2);
  }
}

export { IceCreamTub }
