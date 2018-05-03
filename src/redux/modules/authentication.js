import { getAccessToken, authWithToken } from '~/api/auth'
import { updateUser } from '../../api/auth';


const AUTHENTICATING = 'AUTHENTICATING'
const NOT_AUTHED = 'NOT_AUTHED'
const IS_AUTHED = 'IS_AUTHED'

function isAuthenticating() {
  return {
    type: AUTHENTICATING,
  }
}

function notAuthed() {
  return {
    type: NOT_AUTHED,
  }
}

function isAuthed(uid) {
  return {
    type: IS_AUTHED,
    uid,
  }
}

export function handleAuthWithFirebase() {
  return function (dispatch, getState) {
    dispatch(isAuthenticating())
    return getAccessToken()
      .then(({ accessToken }) => authWithToken(accessToken))
      .catch((error) => console.warn('Error in handleAuthWithFirebase: ', error))
  }
}

export function onAuthChange(user) {
  return function (dispatch) {
    if (!user) {
      dispatch(notAuthed())
    } else {
      let { uid, displayName, photoURL } = user
      updateUser({
        uid,
        displayName,
        photoURL,
      }).then(() => dispatch(isAuthed(uid)))
    }
  }
}

const initialState = {
  isAuthed: false,
  isAuthenticating: false,
  authedID: '',
}

export default function authentication(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATING:
      return {
        ...state,
        isAuthenticating: true,
      }
    case NOT_AUTHED:
      return {
        isAuthed: false,
        authedID: '',
      }
    case IS_AUTHED:
      return {
        isAuthed: true,
        isAuthenticating: false,
        authedID: action.uid,
      }
    default:
      return state
  }
}
