import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { environment } from "./environments/environment";

import { AppModule } from "./app/app.module";

if (environment.production) {
  /*
  Console was cleared
  Angular is running in the development mode. Call enableProdMode() to enable the production mode.
  https://docs.angular.lat/api/core/enableProdMode
  */
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
