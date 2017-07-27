import { takeLatest } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { LoginTypes } from '../Redux/LoginRedux'
import { JobsTypes } from '../Redux/JobsRedux'

/* ------------- Sagas ------------- */

import { getLogin } from './LoginSagas'
import { getJobs } from './JobsSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(LoginTypes.LOGIN_REQUEST, getLogin, api),

    // some sagas receive extra parameters in addition to an action
    takeLatest(JobsTypes.JOBS_REQUEST, getJobs, api)
  ]
}
