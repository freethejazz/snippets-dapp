export const types = {
  SET_USER_PROFILE: 'SET_USER_PROFILE',
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
  HANDLE_PENDING_SIGN_IN: 'HANDLE_PENDING_SIGN_IN',
};

export const actions = {
  setUserProfile: (userProfile) => {
    return {
      type: types.SET_USER_PROFILE,
      payload: userProfile,
    };
  },
  logIn: () => {
    return {
      type: types.LOG_IN,
    };
  },
  logOut: () => {
    return {
      type: types.LOG_OUT,
    };
  },
  handlePendingSignIn: () => {
    return {
      type: types.HANDLE_PENDING_SIGN_IN,
    };
  },
};

const defaultState = {
  loggedIn: false,
  loggingIn: false,
  profile: null,
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case types.SET_USER_PROFILE:
      return {
        ...state,
        loggedIn: true,
        loggingIn: false,
        profile: action.payload.profile,
      };
    case types.HANDLE_PENDING_SIGN_IN:
      return {
        ...state,
        loggingIn: true,
      }
    default:
      return state;
  }
};
