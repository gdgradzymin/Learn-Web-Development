// great source 🙏♥: https://golb.hplar.ch/2018/06/workbox-serviceworker-in-angular-project.html
module.exports = {
  globDirectory: "dist/my-growth/",
  globPatterns: [
    "**/*.{css,eot,html,ico,jpg,js,json,png,svg,ttf,txt,gif,webmanifest,woff,woff2,webm,xml}",
  ],
  globFollow: true,
  globStrict: true,
  globIgnores: ["**/*-es5.*.js"],
  /*
  We can safely assume that a browser that supports service workers also supports ES2015.
  Therefore we ignore the *-es5.*.js files.
  */
  dontCacheBustURLsMatching: new RegExp(".+.[a-f0-9]{20}..+"),
  /*
  Workbox adds by default a cache-buster to URLs when it loads resources,
  but the Angular CLI already creates files with a hash in their name when we do a production build.
  Therefore, we tell Workbox CLI with the option dontCacheBustURLsMatching
  to not add a cache-buster to URLs of resources that already have a hash in their name.
  The regular expression looks for a 20 character hex string in the filename.
   */
  maximumFileSizeToCacheInBytes: 5000000, // don't cache big files
  swSrc: "dist/my-growth/sw.js",
  swDest: "dist/my-growth/sw.js",
};
