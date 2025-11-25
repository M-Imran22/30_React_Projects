import type { Profile } from "../types";

export const LOCAL_KEYS = {
  PROFILE_KEY: "profiles",
  COUNTER_KEY: "counter",
  THEME_KEY: "theme",
};

export const SEED_PROFILES: Profile[] = [
  {
    id: 1,
    name: "M Imran",
    title: "Web Developer",
    imgUrl: "https://i.dawn.com/primary/2023/06/2717425376c8833.webp",
    bio: " Learning React the smart way. Building 30 projects in 30 days!",
  },
  {
    id: 2,
    name: "Ananya Pandey",
    title: "App Developer",
    imgUrl:
      "https://www.thecelebrays.com/wp-content/uploads/2024/04/1698638254_Ananya-Panday-Ananya-Panday-has-made-so-much-wealth-at.jpg",
    bio: " Learning React the smart way. Building 30 projects in 30 days!",
  },
];
