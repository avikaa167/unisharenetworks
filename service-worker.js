self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("unishare-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "items.html",
        "rating.html",
        "style.css",
        "app.js"
      ]);
    })
  );
});
