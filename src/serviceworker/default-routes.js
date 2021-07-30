import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';

export function registerStaticBuildAssetsRoute () {
  registerRoute(
    /(\.js$|\.css$|static\/)/,
    new CacheFirst({
      plugins: [new CacheableResponsePlugin({ statuses: [200] })],
    }),
    `GET`,
  );
}

export function registerPageDataRoute () {
  registerRoute(
    /^https?:.*\/page-data\/.*\.json/,
    new StaleWhileRevalidate({
      plugins: [new CacheableResponsePlugin({ statuses: [200] })],
    }),
    `GET`,
  );
}

export function registerDefaultAssetsRoute () {
  registerRoute(
    /^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/,
    new StaleWhileRevalidate({
      plugins: [new CacheableResponsePlugin({ statuses: [200] })],
    }),
    `GET`,
  );
}

export function registerGoogleFontsRoute () {
  registerRoute(
    /^https?:\/\/fonts\.googleapis\.com\/css/,
    new StaleWhileRevalidate({
      plugins: [new CacheableResponsePlugin({ statuses: [200] })],
    }),
    `GET`,
  );
}

export function registerDefaultRoutes () {
  registerStaticBuildAssetsRoute();
  registerPageDataRoute();
  registerDefaultAssetsRoute();
  registerGoogleFontsRoute();
}
