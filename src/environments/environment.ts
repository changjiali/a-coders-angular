// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: '$API_URL'
};

export const URLs = {
  baseUrl: 'http://ip172-18-0-10-btiohg5im9m000eolp00-8080.direct.labs.play-with-docker.com/',
  marketDataEndpoint: 'api/market/data',
  tradeEndpoint: 'api/trade',
  tradeHistoryEndpoint: 'api/trade/',
  registerEndpoint: 'api/auth/register',
  loginEndpoint: 'api/auth/login',
  portfolioEndpoint: 'api/trade/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
