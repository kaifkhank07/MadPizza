export type StatItem = {
  id: string;
  value: string;
  label: string;
  primary: boolean; // alternating dark / light tiles
};

export const stats: StatItem[] = [
  {
    id: "stat-dishes",
    value: "100+",
    label: "Seasonal Signature in Enjoy Restaurant",
    primary: false,
  },
  {
    id: "stat-healthy",
    value: "100%",
    label: "Healthy Choice with Nutritious Options",
    primary: true,
  },
  {
    id: "stat-pan",
    value: "100+",
    label: "Seasonal Multi in One Pan",
    primary: true,
  },
  {
    id: "stat-choice",
    value: "100%",
    label: "Healthy Choice with Nutritious Options",
    primary: false,
  },
];
