import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';

const initialState = { 
    uid: null,
    error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      if (!checkPassword(action.payload.password)) return setError(state, 'PASSWORD_MISMATCH');
      if (!validateUID(action.payload.uid)) return setError(state, 'INVALID_UID');

      state.uid = action.payload.uid.toUpperCase();
      state.error = null;
    },
    logout(state) {
      state.uid = null;
    },
  },
})

function setError(state, error) {
  state.error = error;
  state.uid = null;
}

function checkPassword(password) {
  return password === 'xyz'
}

function validateUID(uid) {
  const pattern = /(([1-9]{2})+([A-Za-z]{3})+([1-9]{4,5}))/
  return pattern.test(uid)
}

export const useUser = () => {
  return useSelector(state => state.user)
}
export const { login, logout } = userSlice.actions
export default userSlice.reducer