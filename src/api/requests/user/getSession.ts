import { api } from "@/api/instance";
import type { IUserSession } from "@/types/user";

export interface IGetSessionResponse extends IDefaultResponse {
  user: IUserSession;
}

export const getSession = () => api.get<IGetSessionResponse>(`/users/session`);
