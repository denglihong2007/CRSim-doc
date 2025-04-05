import comp from "C:/Users/jjxjj/Desktop/repos/CRSim-doc/docs/.vuepress/.temp/pages/dev/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/dev/get-started.html\",\"title\":\"Get Started\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0.7,\"words\":211},\"filePathRelative\":\"dev/get-started.md\"}")
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
