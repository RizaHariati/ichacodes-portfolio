import { AppState } from "./interfaces";

export const initialState: AppState = {
  allImages: {},
  portfolioImages: {},
  scrollingUp: false,
  scrollPosition: 0,
  indexPage: -1,
  openModal: { status: false, value: "" },
  oldIndexNumber: null,
};
