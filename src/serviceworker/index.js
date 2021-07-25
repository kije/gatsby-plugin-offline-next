import { precache } from "gatsby-plugin-offline-next/serviceworker/precache.js"
import { setup } from "gatsby-plugin-offline-next/serviceworker/setup.js"
import { registerDefaultRoutes } from "gatsby-plugin-offline-next/serviceworker/default-routes.js"
import { setupOfflineRouting } from "gatsby-plugin-offline-next/serviceworker/offline.js"
import { googleAnalytics } from "gatsby-plugin-offline-next/serviceworker/google-analytics.js"
import { cleanup } from "gatsby-plugin-offline-next/serviceworker/cleanup.js"

precache()
setup()
registerDefaultRoutes()
setupOfflineRouting()
googleAnalytics()
cleanup()
