import { AppState } from "../context/interfaces";

interface OpenModalAction {
  type: string;
  payload?: any;
}
export const appReducer = (state: AppState, action: OpenModalAction) => {
  if (action.type === "SET_ALL_IMAGES") {
    const { allImages, portfolioImages } = action.payload;
    return {
      ...state,
      allImages,
      portfolioImages,
    };
  }

  if (action.type === "SET_SCROLL_UP") {
    return {
      ...state,
      scrollingUp: true,
    };
  }
  if (action.type === "SET_SCROLL_DOWN") {
    return {
      ...state,
      scrollingUp: false,
    };
  }
  if (action.type === "OPEN_MODAL") {
    const value = action.payload;
    return {
      ...state,
      openModal: { status: true, value },
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      openModal: { status: false, value: "" },
    };
  }
  return state;
};
