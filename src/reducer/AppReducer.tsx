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

  return state;
};
