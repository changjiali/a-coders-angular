// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const URLs = {
  marketDataService: 'http://ip172-18-0-71-bti2ve3oudsg00f9q79g-8080.direct.labs.play-with-docker.com/api/market/data',
  tradeService: 'http://ip172-18-0-71-bti2ve3oudsg00f9q79g-8080.direct.labs.play-with-docker.com/api/trade',
  tradeHistoryService: 'http://ip172-18-0-71-bti2ve3oudsg00f9q79g-8080.direct.labs.play-with-docker.com/api/trade/',
  registerService: 'http://ip172-18-0-71-bti2ve3oudsg00f9q79g-8080.direct.labs.play-with-docker.com/api/auth/register',
  loginService: 'http://ip172-18-0-71-bti2ve3oudsg00f9q79g-8080.direct.labs.play-with-docker.com/api/auth/login',
  portfolioService: 'http://ip172-18-0-71-bti2ve3oudsg00f9q79g-8080.direct.labs.play-with-docker.com/api/trade/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
