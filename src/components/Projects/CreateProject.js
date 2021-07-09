import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { createProject } from '../../state/actions/projectAction'

function CreateProject({ createProject, auth }) {
  const [project, setProject] = useState({ title: '', content: '' })
  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.id]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    createProject(project)
  }

  if (!auth.uid) return <Redirect to="/signin" />
  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Create new project</h5>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea
            type="text"
            className="materialize-textarea"
            id="content"
            onChange={handleChange}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
