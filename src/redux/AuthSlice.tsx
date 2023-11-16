import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserData} from '../services/types';

interface UserState {
  userData: UserData | null;
}

const initialState: UserState = {
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
  },
});

export const {setUserData} = authSlice.actions;
export default authSlice.reducer;
