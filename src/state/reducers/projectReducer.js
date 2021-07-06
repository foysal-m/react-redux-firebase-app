import { CREATE_PROJECT, CREATE_PROJECT_FAILURE } from '../actions/actionTypes'

const initialState = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'blab blal blall' },
    { id: '2', title: 'egg hunt find peach', content: 'blab blal blall' },
    { id: '3', title: 'never find peach', content: 'blab blal blall' },
  ],
}

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      console.log('created project', action.project)
      return state
    case CREATE_PROJECT_FAILURE:
      console.log('createproject erro', action.err)
      return state
    default:
      return state
  }
}

export default projectReducer
