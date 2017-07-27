import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  jobsRequest: ['page'],
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
export const request = (state, { page }) => {
  console.log('page', page)
  if (page > 1) {
    return state.merge({ fetching: true, page })
  } else {
    return state.merge({ fetching: true, data: [], data_ids: {}, page })
  }
}


// successful api lookup
export const success = (state, { payload }) => {
  const data_ids = state.data_ids || []
  const filtered_payload = (payload.filter(job => {
    if (!data_ids[job.id]) {
      data_ids[job.id] = true
      return true
    }
    return false
  }))
  const data = [...state.data, ...filtered_payload]
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
