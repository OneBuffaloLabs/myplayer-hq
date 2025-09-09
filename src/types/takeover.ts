export type TakeoverAttribute = {
  name: string;
  rating: number;
  isRequirement: boolean;
  boosts: number[];
};

export type Takeover = {
  name: string;
  description: string;
  takeoverAbility: string;
  attributes: TakeoverAttribute[];
};
