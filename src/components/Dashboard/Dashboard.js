import React from 'react'
import { connect } from 'react-redux'

import Notifications from './Notifications'
import ProjectsList from '../Projects/ProjectsList'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

function Dashboard({ projects, auth, notifications }) {
  if (!auth.uid) return <Redirect to="/signin" />
  return (
    <div className="dashboar container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectsList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications notifications={notifications} />
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  }
}
export default compose(
  connect(mapStateToProps, null),
  firestoreConnect([
    { collection: 'projects' },
    { collection: 'notifications', limit: 3 },
  ]),
)(Dashboard)
