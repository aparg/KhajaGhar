import {createSlice} from '@reduxjs/toolkit';

let initialState = {
  profilePhoto: null,
  bio: null,
  firstName: null,
  lastName: null,
  mobileNumber: null,
  email: null,
  cartItems: [],
  favorites: [],
  isLoggedIn: false,
  orders: [],
  isLoggedIn: false,
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
    saveCartItem: (state, action) => {
      //adds item object to the cartItems array
      let updated = false;
      state.cartItems = state.cartItems.map(element => {
        if (element.id === action.payload.id) {
          element.quantity = element.quantity + action.payload.quantity;
          updated = true;
          return element;
        }
        return element;
      });
      !updated && state.cartItems.push(action.payload);
    },
    deleteCartItem: (state, action) => {
      //receives id of element which needs to be deleted
      state.cartItems = state.cartItems.filter(
        element => element.id !== action.payload,
      );
    },
    saveItemsNumber: (state, action) => {
      //if item already exists in cart increase its quantity
      state.cartItems = state.cartItems.map(element => {
        if (element.id === action.payload.id) {
          element.quantity = action.payload.numberOfItems;
          return element;
        }
        return element;
      });
    },
    saveFavorites: (state, action) => {
      let alreadyExists = false;
      state.favorites.forEach(element => {
        if (action.payload === element) alreadyExists = true;
      });
      !alreadyExists && state.favorites.push(action.payload);
    },
    removeFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        element => element !== action.payload,
      );
    },
    setCheckedOut: (state, action) => {
      state.orders.push({orderId: action.payload});
      state.cartItems = [];
    },
    setLogin: (state, action) => {
      state.isLoggedIn = true;
    },
    logOut: (state, action) => {
      state.isLoggedIn = false;
      (state.profilePhoto = null), (state.bio = null);
      state.firstName = null;
      state.lastName = null;
      state.mobileNumber = null;
      state.email = null;
      state.cartItems = [];
      state.favorites = [];
      state.orders = [];
    },
  },
});

export const {
  saveProfileData,
  saveImagePath,
  saveCartItem,
  deleteCartItem,
  saveItemsNumber,
  saveFavorites,
  removeFavorites,
  saveEmail,
  setCheckedOut,
  setLogin,
  logOut,
} = profileSlice.actions;
export default profileSlice.reducer;
