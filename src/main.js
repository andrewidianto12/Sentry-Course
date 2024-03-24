import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/main.pcss"
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

const app = createApp(App)

Sentry.init({
    app,
    dsn: "https://2c6c8153dc4e71b3e84a62e9bac32167@o4506948520837120.ingest.us.sentry.io/4506964130004992",
    logErrors : true,
    release: __SENTRY_RELEASE__,
    integrations: [
      new Integrations.BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: ["localhost", "my-site-url.com",/^\//],
      }),
    ],
    // Performance Monitoring
    // Performance Monitoring
    // Performance Monitoring
    tracesSampleRate: 1.0, //  Capture 100% of the transactions

});
  

app.use(router)
.mount('#app')
