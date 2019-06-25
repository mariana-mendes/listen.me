import { Video } from "./video";

export interface Recommedation {
  video?: Video;
  showButton?: boolean;
  title?: string;
  rating?: number;
}

export interface RecommendationInput extends Recommedation{
  idSource: string;
  idTarget: string;
  type: string;
}
