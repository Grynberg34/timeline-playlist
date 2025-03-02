'use client'; // Ensure this is client-side code

import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "./store"; // Import only the store

interface StoreProviderProps {
  children: ReactNode;
}

export default function StoreProvider({ children }: StoreProviderProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}