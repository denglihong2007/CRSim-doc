import comp from "C:/Users/jjxjj/Desktop/repos/CRSim-doc/docs/.vuepress/.temp/pages/get-started/index.html.vue"
const data = JSON.parse("{\"path\":\"/get-started/\",\"title\":\"Get Started\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Get Started\",\"article\":false,\"feed\":false,\"sitemap\":false},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
