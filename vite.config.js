import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteSentry from "vite-plugin-sentry";


const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, ".env.local") });

//source maps 1 error
// const viteSentryConfig = {
//   authToken: process.env.SENTRY_AUTH_TOKEN,
//   org:"pribadi-3b",
//   project: "sentry-course",
//   release :`${process.env.npm_package_name}@${process.env.npm_package_version}`,
//   setCommits: {},
//   sourceMaps : {
//     include: ["./dist/assets"],
//     ignore: ["node_modules"],
//     urlPrefix: "~/assets",
//   },
// };
const viteSentryConfig = {
  authToken: process.env.SENTRY_AUTH_TOKEN,
  org: "pribadi-3b",
  project: "sentry-course",
  release: `${process.env.npm_package_name}@${process.env.npm_package_version}`,
  setCommits: {},
  sourceMaps: {
    include: ["./dist/assets"],
    ignore: ["node_modules"],
    urlPrefix: "~/assets",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [vue(), viteSentry(viteSentryConfig)],
  build: {
    sourcemap: "hidden",
  },
  define: {
    __SENTRY_RELEASE__: `"${process.env.npm_package_name}@${process.env.npm_package_version}"`,
  },
});
