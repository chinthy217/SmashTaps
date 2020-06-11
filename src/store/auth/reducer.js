import { initialState } from './selectors'
import { SUBMIT_USER_DETAILS } from './actions'

export default (state = initialState, { type, payload }) => {
  // const { alerts } = state;
  // let idx;

  switch (type) {
    case SUBMIT_USER_DETAILS:
      return {
        ...state,
        user: payload,
      }

    default:
      return state
  }
}
