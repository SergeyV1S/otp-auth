import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "sonner";

import { postCreateOtpCode, postSignIn } from "@/api";
import type { IPostOtpParams, IPostSignInParams } from "@/api";

import { userSliceActions } from "../user";

export const postOtpAction = createAsyncThunk("authSlice/postOtp", async (data: IPostOtpParams) =>
  postCreateOtpCode(data).then((res) => res.data)
);

export const postSignInAction = createAsyncThunk(
  "authSlice/postSignIn",
  async (data: IPostSignInParams, { dispatch }) =>
    postSignIn(data)
      .then((res) => {
        dispatch(userSliceActions.setUserSession(res.data.user));
        return res.data;
      })
      .catch((error) => {
        if (error?.response?.data?.reason) {
          toast.error("Ошибка авторизации", {
            description: `${error.response.data.reason}`
          });
        } else {
          toast.error("Не удалось выполнить запрос");
        }

        throw error;
      })
);
