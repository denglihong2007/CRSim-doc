export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/jjxjj/Desktop/repos/CRSim-doc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/app/key.html", { loader: () => import(/* webpackChunkName: "app_key.html" */"C:/Users/jjxjj/Desktop/repos/CRSim-doc/docs/.vuepress/.temp/pages/app/key.html.js"), meta: {"title":"用户密钥申请","index":false} }],
  ["/app/", { loader: () => import(/* webpackChunkName: "app_index.html" */"C:/Users/jjxjj/Desktop/repos/CRSim-doc/docs/.vuepress/.temp/pages/app/index.html.js"), meta: {"title":"使用教程"} }],
  ["/dev/", { loader: () => import(/* webpackChunkName: "dev_index.html" */"C:/Users/jjxjj/Desktop/repos/CRSim-doc/docs/.vuepress/.temp/pages/dev/index.html.js"), meta: {"title":"开发文档"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/jjxjj/Desktop/repos/CRSim-doc/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
