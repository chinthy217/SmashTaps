export const initialState = {
  user: {
    userName: '',
    country: '',
    email: '',
    favouriteColor: '',
  },
}

export const getUser = (state = initialState) => state.user || initialState.user
