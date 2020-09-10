/// <reference lib="webworker" />
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { clientsClaim, skipWaiting } from 'workbox-core';
import { registerRoute, NavigationRoute } from 'workbox-routing';
import { NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

const enum CacheNames {
  JS = 'js-cache',
  CSS = 'css-cache',
  GOOGLE_FONTS = 'google-fonts',
}

skipWaiting();
clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

const defaultRouteHandler = createHandlerBoundToURL('/index.html');

const defaultNavigationRoute = new NavigationRoute(defaultRouteHandler, {
  // here we can put the list of files that we want to be handled by the default router (allowlist) or not (denylist)
  // allowlist: [],
  // denylist: []
});

registerRoute(defaultNavigationRoute);

registerRoute(
  /\.js$/,
  new NetworkFirst({
    cacheName: CacheNames.JS,
  })
);

registerRoute(
  // Cache CSS files.
  /\.css$/,
  // Use cache but update in the background.
  new StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: CacheNames.CSS,
  })
);

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
registerRoute(
  /.*(?:googleapis|gstatic)\.com/,
  new StaleWhileRevalidate({
    cacheName: CacheNames.GOOGLE_FONTS,
  })
);
