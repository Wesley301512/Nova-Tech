import { useLocation } from 'react-router-dom';

export function usePath() {
  const location = useLocation();

  const isCurrentPage = (path) => location.pathname === path;

  return { isCurrentPage };
}