import { Provider } from "react-redux";

import { store } from "@/store";

import { Toaster } from "./ui";

interface IProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: IProvidersProps) => (
  <Provider store={store}>
    {children}
    <Toaster position='top-center' richColors closeButton className='select-none' />
  </Provider>
);
