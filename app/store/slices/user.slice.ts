import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
  userInfo: any;
}
const initialState: UserState = {
  userInfo: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<any>) {
      state.userInfo = action.payload;
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
