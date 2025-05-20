import { useForm } from "react-hook-form";
import type { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { ACCESS_TOKEN } from "@/constants";
import { formatePhone } from "@/lib";
import { phoneFormSchema, signInFormSchema } from "@/lib";
import { authSliceSelectors, postOtpAction, postSignInAction } from "@/store/auth";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { userSliceActions } from "@/store/user";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { isLoading, phoneNumber, retryDelay } = useAppSelector(authSliceSelectors.getAuthState);

  const signInForm = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      phone: phoneNumber as string,
      code: ""
    }
  });

  const phoneForm = useForm<z.infer<typeof phoneFormSchema>>({
    resolver: zodResolver(phoneFormSchema),
    defaultValues: {
      phone: ""
    }
  });

  const onOtpSubmit = async ({ phone }: z.infer<typeof phoneFormSchema>) => {
    dispatch(postOtpAction({ phone: formatePhone(phone) }));
  };

  const signIn = async (values: z.infer<typeof signInFormSchema>) => {
    dispatch(postSignInAction({ phone: values.phone, code: +values.code }));
  };

  const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    dispatch(userSliceActions.removeUserSession());
  };

  const retry = async () => onOtpSubmit({ phone: phoneNumber! });

  return {
    forms: { signInForm, phoneForm },
    state: { isLoading, retryDelay },
    onOtpSubmit,
    signIn,
    logout,
    retry
  };
};
