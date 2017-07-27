/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/
import { call, put, select } from 'redux-saga/effects'
import JobsActions from '../Redux/JobsRedux'

export function * getJobs (api, { page }) {
  const { login } = yield select()
  const token = login && login.data && login.data.access_token ? login.data.access_token : ''

  console.log('token', token)
  // make the call to the api
  const response = yield call(api.getJobs, { page, token })

  // success?
  if (response.ok && response.data.browse) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(JobsActions.jobsSuccess(response.data.browse))
  } else {
    yield put(JobsActions.jobsFailure())
  }
}
