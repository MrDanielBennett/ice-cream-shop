import { Content } from './content.model';
class IceCreamTub {
  scoops: number = 55;
  constructor(public name: string, public price: number, public contents: Content[], public brand: string){}

  displayPrice() {
    return ((Math.ceil(this.price*100))/100).toFixed(2);
  }

  alchoholContent() {
    let ozTotal = 3*128;
    let alchoholOz = 0;
    this.contents.forEach(function(content){alchoholOz+=content.alchoholLiquidOz;});
    return alchoholOz/ozTotal;
  }
}

export { IceCreamTub }
