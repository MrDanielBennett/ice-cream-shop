class IceCreamTub {
  constructor(public name: string, public price: number, public flavors: string[], public brand: string){}
  displayPrice() {
    return ((Math.ceil(this.price*100))/100).toFixed(2);
  }
}

export { IceCreamTub }
