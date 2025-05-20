import { useDispatch, useSelector } from "react-redux";

import type { TAppDispatch, TRootState } from "./types";

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: <TSelected>(selector: (state: TRootState) => TSelected) => TSelected =
  useSelector;
