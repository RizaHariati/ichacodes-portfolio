import { createContext } from "react";
import { AppState } from "./interfaces";

export type AppContextProps = {
  dispatch: ({ type }: { type: string; payload?: any }) => void;
  state: AppState;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
