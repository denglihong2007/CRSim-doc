import comp from "C:/Users/jjxjj/Desktop/repos/CRSim-doc/docs/.vuepress/.temp/pages/app/index.html.vue"
const data = JSON.parse("{\"path\":\"/app/\",\"title\":\"使用教程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"使用教程\",\"index\":false},\"readingTime\":{\"minutes\":0.02,\"words\":7},\"filePathRelative\":\"app/README.md\"}")
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
