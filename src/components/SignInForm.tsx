import { PatternFormat } from "react-number-format";
import type { z } from "zod";

import { useAuth } from "@/hooks";
import type { signInFormSchema } from "@/lib";

import { Button, Input } from "./ui";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "./ui/input-otp";

interface ISignInFormProps {
  onSubmit: (values: z.infer<typeof signInFormSchema>) => Promise<void>;
  isLoading: boolean;
}

export const SignInForm = ({ onSubmit, isLoading }: ISignInFormProps) => {
  const { forms } = useAuth();

  return (
    <Form {...forms.signInForm}>
      <form onSubmit={forms.signInForm.handleSubmit(onSubmit)} className='grid gap-7'>
        <FormField
          control={forms.signInForm.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Номер телефона*</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Введите номер телефона'
                  format='+# (###) ### ## ##'
                  isValidationError={!!forms.signInForm.formState.errors.phone}
                  disabled
                  mask='_'
                  component={PatternFormat}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={forms.signInForm.control}
          name='code'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Проверочный код*</FormLabel>
              <div className='w-full flex items-center justify-center flex-col gap-2'>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup isValidationError={!!forms.signInForm.formState.errors.code}>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup isValidationError={!!forms.signInForm.formState.errors.code}>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button loading={isLoading} type='submit'>
          Войти
        </Button>
      </form>
    </Form>
  );
};
