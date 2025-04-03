const cache_app = "my-app";

const urlsToCache = [
  "/",
  "/_next/static/chunks/%5Broot%20of%20the%20server%5D__6d1b8c7e._.css",
  "/_next/static/chunks/src_app_page_tsx_60cd0e13._.js",
  "_next/static/chunks/src_app_layout_tsx_f0e4c1a2._.js",
  "/_next/static/media/gyByhwUxId8gMEwcGFWNOITd-s.p.da1ebef7.woff2",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(cache_app)
      .then((cache) => {
        cache.addAll(urlsToCache);
      })
      .catch((e) => {
        console.log(e);
      })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches
      .match(e.request)
      .then((res) => {
        if (!navigator.onLine) {
          res && res;
        }

        const url = e.request.clone();
        fetch(url);
      })
      .catch((e) => console.log(e))
  );
});
