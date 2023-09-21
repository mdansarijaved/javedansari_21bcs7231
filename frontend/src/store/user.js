import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    uid: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
        if (action.payload.password == 'xyz') state.uid = action.payload.uid;
    },
    logout(state) {
      state.uid = null;
    },
  },
})

export const { increment, decrement, incrementByAmount } = userSlice.actions
export default userSlice.reducer