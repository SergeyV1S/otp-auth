import { combineSlices } from "@reduxjs/toolkit";

import { authSlice } from "./auth";
import { userSlice } from "./user";

export const rootReducer = combineSlices(authSlice, userSlice);
