import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "C:/Users/jjxjj/Desktop/repos/CRSim-doc/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "C:/Users/jjxjj/Desktop/repos/CRSim-doc/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"

import "C:/Users/jjxjj/Desktop/repos/CRSim-doc/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "C:/Users/jjxjj/Desktop/repos/CRSim-doc/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "C:/Users/jjxjj/Desktop/repos/CRSim-doc/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "C:/Users/jjxjj/Desktop/repos/CRSim-doc/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);


  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
