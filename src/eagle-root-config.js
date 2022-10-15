import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/start"],
});

registerApplication({
  name: "@eagle/el-base-app",
  app: () => System.import("@eagle/el-base-app"),
  activeWhen: ["/vue-app/"],
});

start({
  urlRerouteOnly: true,
});
