import { AppState } from "./interfaces";

export const initialState: AppState = {
  allImages: {},
  portfolioImages: {},
  scrollingUp: false,
  openModal: { status: false, value: "" },
};
