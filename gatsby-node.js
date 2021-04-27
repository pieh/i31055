exports.onCreatePage = ({ page, actions }) => {
  let newPath = page.path.toLowerCase()
  if (page.path !== newPath) {
    actions.deletePage(page)
    actions.createPage({ ...page, path: newPath })
  }
}
