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
  createPages('./src/pages/tests.html', './pages/tests.html', ['index']),
  createPages('./src/pages/dictionary.html', './pages/dictionary.html', [
    'index'
  ]),
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
  createPages('./src/pages/tests/test1.html', './pages/tests/test1.html', [
    'index'
  ])
]

module.exports = htmlPages
