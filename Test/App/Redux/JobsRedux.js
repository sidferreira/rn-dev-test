import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  jobsRequest: ['request'],
  jobsSuccess: ['payload'],
  jobsFailure: null
})

export const JobsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: [],
  data_ids: [],
  fetching: null,
//  payload: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, request) => {
  if (request.page) {
    return state.merge({ fetching: true, data: [], data_ids: [] })
  } else {
    return state.merge({ fetching: true })
  }
}


// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  const data_ids = state.data_ids
  const data = [...data, ...(payload.filter(job => {
    if (data_ids.indexOf(job.id) === -1) {
      data_ids.push(job.id)
      return true
    }
    return false
  }))]
  return state.merge({ fetching: false, error: null, data, data_ids })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, data: [], data_ids: [] })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.JOBS_REQUEST]: request,
  [Types.JOBS_SUCCESS]: success,
  [Types.JOBS_FAILURE]: failure
})
