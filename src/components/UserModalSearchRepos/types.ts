export interface UserModalSearchReposProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (username: string) => void;
  isLoading: boolean;
  isError: boolean;
  hasData: boolean;
}
