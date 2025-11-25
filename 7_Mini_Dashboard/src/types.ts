export interface Profile {
  id: number;
  name: string;
  title: string;
  imgUrl: string;
  bio: string;
}

export interface Tab {
  id: string;
  title: string;
  view: "Profiles" | "Analytics" | "Manage";
}
