import { api } from "@/api/instance";

export interface IPostOtpParams {
  phone: string;
}

export interface IPostOtpResponse extends IDefaultResponse {
  retryDelay: number;
}

export const postCreateOtpCode = async (data: IPostOtpParams) =>
  api.post<IPostOtpResponse>("/auth/otp", data);
