import { createContext } from "react";
import { TextHeightType } from "../components/homeComponents/Home";
import { AppState } from "./interfaces";
import useCallback from "react";

export type AppContextProps = {
  dispatch: ({ type }: { type: string; payload?: any }) => void;
  state: AppState;

  setCloseModal: () => void;
  setOpenModal: (value: string) => void;
  textHeight: TextHeightType;
  handleScroll: (
    e: React.UIEvent<HTMLDivElement, UIEvent>,
    indexPage: number
  ) => void;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
