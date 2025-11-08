export interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (selectedFilters: string[]) => void;
  filterOptions: string[];
  selectedFilters: string[];
}
