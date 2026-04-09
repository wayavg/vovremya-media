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


  //basa-art
  createPages(
    './src/pages/articles/manage-time.html',
    './pages/articles/manage-time.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/the-2-minute-rule.html',
    './pages/articles/the-2-minute-rule.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/digital-detox.html',
    './pages/articles/digital-detox.html',
    ['index']
  ), //
  createPages(
    './src/pages/articles/exam-prep-plan.html',
    './pages/articles/exam-prep-plan.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/fast-note-taking-methods.html',
    './pages/articles/fast-note-taking-methods.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/sleep-vs-study.html',
    './pages/articles/sleep-vs-study.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/prioritizing-tasks.html',
    './pages/articles/prioritizing-tasks.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/tiktok-distraction-focus.html',
    './pages/articles/tiktok-distraction-focus.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/evening-shutdown-ritual.html',
    './pages/articles/evening-shutdown-ritual.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/speed-reading-vs-slow.html',
    './pages/articles/speed-reading-vs-slow.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/swiss-cheese-technique.html',
    './pages/articles/swiss-cheese-technique.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/common-time-management-mistakes.html',
    './pages/articles/common-time-management-mistakes.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/emergency-deadline-plan.html',
    './pages/articles/emergency-deadline-plan.html',
    ['index']
  ),

  //main-art
  createPages(
    './src/pages/articles/brian-tracy-method.html',
    './pages/articles/brian-tracy-method.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/breaking-down-study-projects.html',
    './pages/articles/breaking-down-study-projects.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/finding-time-for-hobbies.html',
    './pages/articles/finding-time-for-hobbies.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/group-project-management.html',
    './pages/articles/group-project-management.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/conscious-idleness.html',
    './pages/articles/conscious-idleness.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/information-overload-tips.html',
    './pages/articles/information-overload-tips.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/phone-free-experiment.html',
    './pages/articles/phone-free-experiment.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/sport-and-productivity.html',
    './pages/articles/sport-and-productivity.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/improvisation-time.html',
    './pages/articles/improvisation-time.html',
    ['index']
  ),

  //pro-art
  createPages(
    './src/pages/articles/perfectionist-syndrome-deadlines.html',
    './pages/articles/perfectionist-syndrome-deadlines.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/freelance-and-study-tips.html',
    './pages/articles/freelance-and-study-tips.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/time-tracking-diary.html',
    './pages/articles/time-tracking-diary.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/multitasking-myth.html',
    './pages/articles/multitasking-myth.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/blogging-while-studying.html',
    './pages/articles/blogging-while-studying.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/internship-hobby-balance.html',
    './pages/articles/internship-hobby-balance.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/reverse-planning.html',
    './pages/articles/reverse-planning.html',
    ['index']
  ),
  createPages(
    './src/pages/articles/creative-chaos-deadlines.html',
    './pages/articles/creative-chaos-deadlines.html',
    ['index']
  ),


  createPages('./src/pages/tests.html', './pages/tests.html', ['index']),
  createPages('./src/pages/checklists.html', './pages/checklists.html', [
    'index'
  ]),

  //checklists
  createPages('./src/pages/checklists/the-2-minute-rule.html', './pages/checklists/the-2-minute-rule.html', [
    'index'
  ]),
  createPages('./src/pages/checklists/digital-detox.html', './pages/checklists/digital-detox.html', [
    'index'
  ]),
  createPages('./src/pages/checklists/six-steps-to-simple-student-life.html', './pages/checklists/six-steps-to-simple-student-life.html', [
    'index'
  ]),
  createPages('./src/pages/checklists/exam-prep-plan.html', './pages/checklists/exam-prep-plan.html', [
    'index'
  ]),
  createPages('./src/pages/checklists/fast-note-taking-methods.html', './pages/checklists/fast-note-taking-methods.html', [
    'index'
  ]),
  createPages('./src/pages/checklists/group-project-management.html', './pages/checklists/group-project-management.html', [
    'index'
  ]),
  createPages('./src/pages/checklists/breaking-down-study-projects.html', './pages/checklists/breaking-down-study-projects.html', [
    'index'
  ]),
  createPages('./src/pages/checklists/time-management-emergency.html', './pages/checklists/time-management-emergency.html', [
    'index'
  ]),
  createPages('./src/pages/checklists/emergency-deadline-plan.html', './pages/checklists/emergency-deadline-plan.html', [
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
  createPages('./src/pages/404.html', './pages/404.html', ['index']),
  
  createPages('./src/pages/tests/test1.html', './pages/tests/test1.html', [
    'index'
  ])
]

module.exports = htmlPages

