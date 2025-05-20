import { createAsyncThunk } from "@reduxjs/toolkit";

import { getSession } from "@/api";

export const getUserSessionAction = createAsyncThunk("userSlice/getUserSession", async () =>
  getSession().then((res) => res.data.user)
);
