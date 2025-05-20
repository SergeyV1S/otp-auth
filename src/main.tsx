import { createRoot } from "react-dom/client";

import { Providers } from "@/components/Providers";

import { App } from "./App";
import { ACCESS_TOKEN } from "./constants";
import "./index.css";
import { store } from "./store";
import { getUserSessionAction } from "./store/user";

const init = async () => {
  const token = localStorage.getItem(ACCESS_TOKEN);

  if (token) {
    try {
      await store.dispatch(getUserSessionAction());
    } catch (error) {
      console.error("Ошибка проверки сессии", error);
    }
  }

  return createRoot(document.getElementById("root")!).render(
    <Providers>
      <App />
    </Providers>
  );
};

init();
