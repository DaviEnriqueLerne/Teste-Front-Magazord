export interface FilterButtonProps {
  name: string;
  filtersOptions: string[];
  onFilterChange: (text: string, filters: string[]) => void;
}
