export interface SearchBarProps {
  onSearch: (text: string, filters: { type: string; language: string }) => void;
}
