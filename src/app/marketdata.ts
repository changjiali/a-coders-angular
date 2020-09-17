export class MarketData {
  public quantity: number;
  constructor(public ticker: string, public instrument: string, public lastScrapeTime: string,
              public quotePrice: number, public volume: number,
              public open: number,
              public previousClose: number, public peRatio: number) {}
}
