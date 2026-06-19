const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index', 'react']),
  createPages('./src/pages/search.html', './search.html', ['index', 'search', 'searchdata', 'react']),

  createPages('./src/pages/articles.html', './articles.html', ['index', 'react']),


  //basa-art
  createPages(
    './src/pages/articles/manage-time.html',
    './articles/manage-time.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/the-2-minute-rule.html',
    './articles/the-2-minute-rule.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/digital-detox.html',
    './articles/digital-detox.html',
    ['index', 'react']
  ), //
  createPages(
    './src/pages/articles/exam-prep-plan.html',
    './articles/exam-prep-plan.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/fast-note-taking-methods.html',
    './articles/fast-note-taking-methods.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/sleep-vs-study.html',
    './articles/sleep-vs-study.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/prioritizing-tasks.html',
    './articles/prioritizing-tasks.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/tiktok-distraction-focus.html',
    './articles/tiktok-distraction-focus.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/evening-shutdown-ritual.html',
    './articles/evening-shutdown-ritual.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/speed-reading-vs-slow.html',
    './articles/speed-reading-vs-slow.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/swiss-cheese-technique.html',
    './articles/swiss-cheese-technique.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/common-time-management-mistakes.html',
    './articles/common-time-management-mistakes.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/emergency-deadline-plan.html',
    './articles/emergency-deadline-plan.html',
    ['index', 'react']
  ),

  //main-art
  createPages(
    './src/pages/articles/brian-tracy-method.html',
    './articles/brian-tracy-method.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/breaking-down-study-projects.html',
    './articles/breaking-down-study-projects.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/finding-time-for-hobbies.html',
    './articles/finding-time-for-hobbies.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/group-project-management.html',
    './articles/group-project-management.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/conscious-idleness.html',
    './articles/conscious-idleness.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/information-overload-tips.html',
    './articles/information-overload-tips.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/phone-free-experiment.html',
    './articles/phone-free-experiment.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/sport-and-productivity.html',
    './articles/sport-and-productivity.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/improvisation-time.html',
    './articles/improvisation-time.html',
    ['index', 'react']
  ),

  //pro-art
  createPages(
    './src/pages/articles/perfectionist-syndrome-deadlines.html',
    './articles/perfectionist-syndrome-deadlines.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/freelance-and-study-tips.html',
    './articles/freelance-and-study-tips.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/time-tracking-diary.html',
    './articles/time-tracking-diary.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/multitasking-myth.html',
    './articles/multitasking-myth.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/blogging-while-studying.html',
    './articles/blogging-while-studying.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/internship-hobby-balance.html',
    './articles/internship-hobby-balance.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/reverse-planning.html',
    './articles/reverse-planning.html',
    ['index', 'react']
  ),
  createPages(
    './src/pages/articles/creative-chaos-deadlines.html',
    './articles/creative-chaos-deadlines.html',
    ['index', 'react']
  ),

  createPages('./src/pages/checklists.html', './checklists.html', 
    ['index', 'react']
  ),

  //checklists
  createPages('./src/pages/checklists/the-2-minute-rule.html', './checklists/the-2-minute-rule.html', 
    ['index', 'react']
  ),
  createPages('./src/pages/checklists/digital-detox.html', './checklists/digital-detox.html', 
    ['index', 'react']
  ),
  createPages('./src/pages/checklists/six-steps-to-simple-student-life.html', './checklists/six-steps-to-simple-student-life.html', 
    ['index', 'react']
  ),
  createPages('./src/pages/checklists/exam-prep-plan.html', './checklists/exam-prep-plan.html', 
    ['index', 'react']
  ),
  createPages('./src/pages/checklists/fast-note-taking-methods.html', './checklists/fast-note-taking-methods.html', 
    ['index', 'react']
  ),
  createPages('./src/pages/checklists/group-project-management.html', './checklists/group-project-management.html', 
    ['index', 'react']
  ),
  createPages('./src/pages/checklists/breaking-down-study-projects.html', './checklists/breaking-down-study-projects.html', 
    ['index', 'react']
  ),
  createPages('./src/pages/checklists/time-management-emergency.html', './checklists/time-management-emergency.html', 
    ['index', 'react']
  ),
  createPages('./src/pages/checklists/emergency-deadline-plan.html', './checklists/emergency-deadline-plan.html', 
    ['index', 'react']
  ),

  createPages('./src/pages/tests.html', './tests.html', 
    ['index', 'react']
  ),

  //tests
  createPages('./src/pages/tests/deadline-is-it-a-limit-or-expiry.html', './tests/deadline-is-it-a-limit-or-expiry.html', 
    ['index', 'react']
  ),
  createPages('./src/pages/tests/what-kind-of-time-vampire-are-you.html', './tests/what-kind-of-time-vampire-are-you.html', 
    ['index', 'react']
  ),
  createPages('./src/pages/tests/alarm-clock-battle-winner-or-victim.html', './tests/alarm-clock-battle-winner-or-victim.html', 
    ['index', 'react']
  ),

  createPages('./src/pages/resources.html', './resources.html', 
    ['index', 'react']
  ),

  //resources
  createPages('./src/pages/resources/books.html', './resources/books.html', 
    ['index', 'react']
  ),
  createPages('./src/pages/resources/reels.html', './resources/reels.html', 
    ['index', 'react']
  ),
  createPages('./src/pages/resources/movies.html', './resources/movies.html', 
    ['index', 'react']
  ),


  createPages('./src/pages/about.html', './about.html', 
    ['index', 'react']
  ),
  createPages('./src/pages/styleguide.html', './styleguide.html', 
    ['index', 'react']
  ),
  createPages('./src/pages/sitemap.html', './sitemap.html', 
    ['index', 'react']
  ),
  createPages('./src/pages/404.html', './404.html', 
    ['index', 'react']
  ),
  
  
]

module.exports = htmlPages

