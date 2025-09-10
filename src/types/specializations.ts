export type Goal = {
  goal: string;
  objective: string;
  reward: string;
};

export type Specialization = {
  name: string;
  description: string;
  requirements: string[];
  goals: Goal[];
};
