import { useAuth } from "@/hooks";

import { PhoneForm } from "./PhoneForm";
import { SignInForm } from "./SignInForm";
import { Timer } from "./Timer";
import { Card, CardContent, CardHeader, CardTitle } from "./ui";

export const SignIn = () => {
  const { state, onOtpSubmit, retry, signIn } = useAuth();

  return (
    <Card className='m-auto w-full max-w-sm'>
      <CardHeader className='text-center border-b pb-2 border-b-slate-200'>
        <CardTitle className='text-2xl'>Авторизация</CardTitle>
      </CardHeader>
      <CardContent className='mt-5'>
        {state.retryDelay ? (
          <SignInForm isLoading={state.isLoading} onSubmit={signIn} />
        ) : (
          <PhoneForm isLoading={state.isLoading} onSubmit={onOtpSubmit} />
        )}
      </CardContent>
      {state.retryDelay && (
        <Timer delay={state.retryDelay} onRetry={retry} loading={state.isLoading} />
      )}
    </Card>
  );
};
