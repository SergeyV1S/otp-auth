import type { store } from ".";
import type { rootReducer } from "./rootReducer";

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppDispatch = typeof store.dispatch;
