import {createSlice} from '@reduxjs/toolkit';

let initialState = {
  profilePhoto: null,
  bio: null,
  firstName: null,
  lastName: null,
  mobileNumber: null,
  email: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    saveProfileData: (state, action) => {
      state.bio = action.payload.bio;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.mobileNumber = action.payload.mobileNumber;
    },
    saveImagePath: (state, action) => {
      state.profilePhoto = action.payload.imgPath;
    },
    saveEmail: (state, action) => {
      state.email = action.payload.email;
    },
  },
});

export const {saveProfileData, saveImagePath} = profileSlice.actions;
export default profileSlice.reducer;
