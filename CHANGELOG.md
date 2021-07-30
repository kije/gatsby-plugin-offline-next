# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 5.1.0 (2021-07-30)
- provide exports for individual default routes
- allow custom defines that get passed to webpack's DefinePlugin

# 5.0.2 (2021-07-25)
- removed some dev artifacts from published npm package

# 5.0.1 (2021-07-25)
- fixed some leftover occurrences of references to gatsby-plugin-offline instead of gatsby-plugin-offline-next
- fixed documentation link

# 5.0.0 (2021-07-25)

- Upgraded workbox from v4.x to v6.x
- No longer uses workbox-build/generateSW. public/sw.js is now generated during the build-javascript stage via the workbox-webpack-plugin
- precache resources gathered from built pages is no longer inlined in the sw.js itself, but written after the build to a separate file that gets included via importScripts in the service worker. The file name contains a content hash to ensure that a service worker update is triggered it it's content changes
- default runtime caching handlers: only cache successful (HTTP status 200) responses
- added deletePreviousCacheVersionsOnUpdate for cleaning up old cache versions in case cacheId changes
- ⚠️ breaking changes to the structure of the options of this plugin due to workbox upgrade -> see [Migrating from official gatsby-plugin-offline (v4.x)](https://github.com/kije/gatsby-plugin-offline-next#migrating-from-official-gatsby-plugin-offline-v4x) 

# Previous versions (up to v4.11.0-next.0)
- see [changelog of the official gatsby-plugin-offline](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-plugin-offline/CHANGELOG.md)
