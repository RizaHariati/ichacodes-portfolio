import { AllImageType, PortfolioType, ShowModalType } from "./types.d";

export interface AppState {
  allImages: AllImageType;
  portfolioImages: PortfolioType;
  scrollingUp: boolean;
  openModal: ShowModalType;
}
