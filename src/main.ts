import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Workbox } from 'workbox-window';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    loadServiceWorker();
  })
  .catch((err) => console.error(err));

function loadServiceWorker() {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('sw.js');

    wb.addEventListener('activated', (event) => {
      if (!event.isUpdate) {
        // Service worker activated for the first time!
        console.log(
          '🐱‍🏍🐱‍🏍🐱‍🏍 Service worker activated for the first time!'
        );
      } else {
        // Service worker activated!
        console.log('🐱‍🏍🐱‍🏍🐱‍🏍 Service worker activated!');
      }
    });

    wb.addEventListener('waiting', (event) => {
      /*
        A new service worker has installed, but it can't activate
            until all tabs running the current version have fully unloaded.
            */
      console.log(
        '🐱‍🏍🐱‍🏍🐱‍🏍  A new service worker has installed, but it cant activate'
      );
    });

    wb.addEventListener('installed', (event) => {
      if (!event.isUpdate) {
        // Service worker installed for the first time
        console.log('🐱‍🏍🐱‍🏍🐱‍🏍 Service worker installed for the first time');
      } else {
        // New content is available, reload is needed
        console.log(
          '🐱‍🏍🐱‍🏍🐱‍🏍 SW installed, new content is available, reload is needed'
        );
      }
    });

    wb.register();
  }
}
