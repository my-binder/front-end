import { useLocation } from 'react-router-dom';

export function usePage() {
  const location = useLocation();
  if (location.pathname === '/') return 'landing';
  return location.pathname.split('/')[1];
}
