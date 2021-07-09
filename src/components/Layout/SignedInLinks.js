/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../state/actions/authAction'
function SignedInLinks({ user, signOut }) {
  console.log(user)
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a onClick={signOut}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {user.initials}
        </NavLink>
      </li>
    </ul>
  )
}
const mapStateToProps = (state) => {
  return {
    user: state.firebase.profile,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)
