import { AppState } from "../context/interfaces";
import { projects } from "../data/data";

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

  if (action.type === "SET_SCROLL_POSITION") {
    const position = action.payload;

    return {
      ...state,
      scrollPosition: position,
    };
  }

  if (action.type === "SET_OLD_INDEX") {
    const oldIndexNumber = action.payload;

    return {
      ...state,
      oldIndexNumber,
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
