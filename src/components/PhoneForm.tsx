import { PatternFormat } from "react-number-format";
import type { z } from "zod";

import { useAuth } from "@/hooks";
import type { phoneFormSchema } from "@/lib";

import { Button, Input } from "./ui";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";

interface IPhoneFormProps {
  onSubmit: (values: z.infer<typeof phoneFormSchema>) => Promise<void>;
  isLoading: boolean;
}

export const PhoneForm = ({ onSubmit, isLoading }: IPhoneFormProps) => {
  const { forms } = useAuth();

  return (
    <Form {...forms.phoneForm}>
      <form onSubmit={forms.phoneForm.handleSubmit(onSubmit)} className='grid gap-7'>
        <FormField
          control={forms.phoneForm.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Номер телефона*</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='Введите номер телефона'
                  format='+7 (###) ### ## ##'
                  isValidationError={!!forms.phoneForm.formState.errors.phone}
                  mask='_'
                  component={PatternFormat}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button loading={isLoading} type='submit' className='w-full'>
          Получить код подтверждения
        </Button>
      </form>
    </Form>
  );
};
