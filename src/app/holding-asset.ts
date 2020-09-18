export class HoldingAsset {
  inputQuantity: number;
  constructor(public ticker: string, public quantity: number, public price: number,
              public instrument: string){}
}
