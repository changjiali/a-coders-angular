export class TradeHistory {
  constructor(public created: string, public state: string, public type: string, public instrument: string,
              public ticker: string, public quantity: number, public price: number){}
}
