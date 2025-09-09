export type BadgeRequirement = {
  badge: string;
  attribute: string;
  condition: 'PRIMARY' | 'OR' | 'AND';
  bronze: number;
  silver: number;
  gold: number;
  hof: number;
  legend: number;
  minHeight: number;
  maxHeight: number;
};

export type BadgeRequirementCategory = {
  category: string;
  data: BadgeRequirement[];
};
