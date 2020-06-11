export const SUBMIT_USER_DETAILS = 'SUBMIT_USER_DETAILS'

export const submitUserDetails = (details) => ({
  type: SUBMIT_USER_DETAILS,
  payload: { ...details },
})
