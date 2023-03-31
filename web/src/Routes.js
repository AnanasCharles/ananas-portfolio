// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Private unauthenticated="login">
        <Route path="/admin/create-blogpost" page={BlogCreatePage} name="blogCreate" />
        <Set wrap={ScaffoldLayout} title="Tags" titleTo="tags" buttonLabel="New Tag" buttonTo="newTag">
          <Route path="/admin/tags/new" page={TagNewTagPage} name="newTag" />
          <Route path="/admin/tags/{id:Int}/edit" page={TagEditTagPage} name="editTag" />
          <Route path="/admin/tags/{id:Int}" page={TagTagPage} name="tag" />
          <Route path="/admin/tags" page={TagTagsPage} name="tags" />
        </Set>
        <Set wrap={ScaffoldLayout} title="ProjectTagss" titleTo="projectTagss" buttonLabel="New ProjectTags" buttonTo="newProjectTags">
          <Route path="/admin/project-tags/new" page={ProjectTagsNewProjectTagsPage} name="newProjectTags" />
          <Route path="/admin/project-tags/{id:Int}/edit" page={ProjectTagsEditProjectTagsPage} name="editProjectTags" />
          <Route path="/admin/project-tags/{id:Int}" page={ProjectTagsProjectTagsPage} name="projectTags" />
          <Route path="/admin/project-tags" page={ProjectTagsProjectTagssPage} name="projectTagss" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Projects" titleTo="projects" buttonLabel="New Project" buttonTo="newProject">
          <Route path="/admin/projects/new" page={ProjectNewProjectPage} name="newProject" />
          <Route path="/admin/projects/{id:Int}/edit" page={ProjectEditProjectPage} name="editProject" />
          <Route path="/admin/projects/{id:Int}" page={ProjectProjectPage} name="project" />
          <Route path="/admin/projects" page={ProjectProjectsPage} name="projects" />
        </Set>
      </Private>
      <Set wrap={MainLayout}>
        <Route path="/blog/{id}" page={PostPage} name="post" />
        <Route path="/blog" page={BlogPage} name="blog" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
