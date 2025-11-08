export interface ItemRow {
  title: string;
  description: string | null;
  stars: number;
  forks: number;
  urlRedirectRepo: string;
  language: string | null;
  activeTab: "repositories" | "starred";
}
