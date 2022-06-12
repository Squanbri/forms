import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuth: boolean,
  accessToken: string | null,
}

const initialState: AuthState = {
  isAuth: false,
  accessToken: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(
      state, 
      action: PayloadAction<string>
    ) {
      state.isAuth = true;
      state.accessToken = action.payload;
      localStorage.setItem('token_auth', state.accessToken);
    },
    logout(state) {
      state.isAuth = false;
      state.accessToken = null;
      localStorage.removeItem('token_auth');
    }
  }
});

export default authSlice.reducer;