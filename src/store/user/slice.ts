import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { IUserSession } from "@/types/user";

import { getUserSessionAction } from "./action";
import type { IUserInitialState } from "./type";

export const initialState: IUserInitialState = {
  isLoading: false
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserSession: (state, action: PayloadAction<IUserSession>) => {
      state.userSession = action.payload;
    },
    removeUserSession: (state) => {
      state.userSession = undefined;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserSessionAction.fulfilled, (state, action: PayloadAction<IUserSession>) => {
        state.isLoading = false;
        state.userSession = action.payload;
      })
      .addCase(getUserSessionAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserSessionAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
  selectors: {
    getUserState: (state) => state
  }
});

export const userSliceActions = userSlice.actions;

export const userSliceSelectors = userSlice.selectors;
