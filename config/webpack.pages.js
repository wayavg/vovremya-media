const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index']),
  createPages('./src/pages/articles.html', './pages/articles.html', ['index']),


  createPages(
    './src/pages/articles/first_art.html',
    './pages/articles/first_art.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/sec_art.html',
    './pages/articles/sec_art.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/third_art.html',
    './pages/articles/third_art.html',
    ['index']
  ),


  createPages('./src/pages/tests.html', './pages/tests.html', ['index']),
  createPages('./src/pages/checklists.html', './pages/checklists.html', [
    'index'
  ]),
  createPages('./src/pages/resources.html', './pages/resources.html', [
    'index'
  ]),
  createPages('./src/pages/about.html', './pages/about.html', [
    'index'
  ]),
  createPages('./src/pages/styleguide.html', './pages/styleguide.html', [
    'index'
  ]),
  createPages('./src/pages/sitemap.html', './pages/sitemap.html', [
    'index'
  ]),
  
  createPages('./src/pages/tests/test1.html', './pages/tests/test1.html', [
    'index'
  ])
]

module.exports = htmlPages

