import type { IUserSession } from "@/types/user";

export interface IUserInitialState {
  userSession?: IUserSession;
  isLoading: boolean;
  error?: string;
}
