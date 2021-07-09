import { CREATE_PROJECT, CREATE_PROJECT_FAILURE } from './actionTypes'

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const profile = getState().firebase.profile
    const userId = getState().firebase.auth.uid
    const firestore = getFirestore()
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: userId,
        createAt: new Date(),
      })
      .then(() => {
        dispatch({ type: CREATE_PROJECT, project })
      })
      .catch((err) => {
        dispatch({ type: CREATE_PROJECT_FAILURE, err })
      })
  }
}
