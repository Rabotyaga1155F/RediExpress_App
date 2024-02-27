import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface PackageState {
  packageInfo: any[];
}

const initialState: PackageState = {
  packageInfo: [],
};

const packageSlice = createSlice({
  name: 'package',
  initialState,
  reducers: {
    setPackageInfo(state, action: PayloadAction<any[]>) {
      state.packageInfo = action.payload;
    },
  },
});

export const {setPackageInfo} = packageSlice.actions;

export default packageSlice.reducer;
