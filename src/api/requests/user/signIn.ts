import { api } from "@/api/instance";
import type { IUserSession } from "@/types/user";

export interface IPostSignInParams {
  phone: string;
  code: number;
}

export interface IPostSignInResponse extends IDefaultResponse {
  user: IUserSession;
  token: string;
}

export const postSignIn = async (data: IPostSignInParams) =>
  api.post<IPostSignInResponse>("/users/signin", data);
