const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/home/unix/Desktop/projects/bbt/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/unix/Desktop/projects/bbt/src/templates/blog-post.js"))),
  "component---src-templates-tag-page-js": hot(preferDefault(require("/home/unix/Desktop/projects/bbt/src/templates/tag-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/unix/Desktop/projects/bbt/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/unix/Desktop/projects/bbt/src/pages/about.js"))),
  "component---src-pages-elements-js": hot(preferDefault(require("/home/unix/Desktop/projects/bbt/src/pages/elements.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/unix/Desktop/projects/bbt/src/pages/index.js"))),
  "component---src-pages-tags-js": hot(preferDefault(require("/home/unix/Desktop/projects/bbt/src/pages/tags.js")))
}

