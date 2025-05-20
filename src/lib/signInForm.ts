import { z } from "zod";

import { formatePhone } from ".";

export const phoneFormSchema = z.object({
  phone: z
    .string()
    .min(1, "	Поле является обязательным")
    .refine((phone) => {
      const formatedPhone = formatePhone(phone);
      return formatedPhone.length === 11 && formatedPhone.length > 1;
    }, "Неверный номер телефона")
});

export const signInFormSchema = phoneFormSchema.extend({
  code: z.string().min(6, {
    message: "Код должен содержать 6 цифр"
  })
});
