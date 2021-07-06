import React from 'react'

import Notifications from './Notifications'
import ProjectsList from '../Projects/ProjectsList'

function Dashboard() {
  return (
    <div className="dashboar container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectsList />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
