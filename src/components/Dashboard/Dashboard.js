import React from 'react'
import { connect } from 'react-redux'

import Notifications from './Notifications'
import ProjectsList from '../Projects/ProjectsList'

function Dashboard(props) {
  const { projects } = props
  return (
    <div className="dashboar container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectsList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
  }
}
export default connect(mapStateToProps, null)(Dashboard)
